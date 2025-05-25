import { useNotify } from "react-admin";
import { API_URL } from "../../utils/constants.ts";
import { getAuthHeader } from "../../utils/authHeader.ts";
import { useCallback } from "react";
import { ExportPillsButtonService } from "./types.ts";

export const useExportPillsButton = (): ExportPillsButtonService => {
  const notify = useNotify();
  const downloadUrl = `${API_URL}/pills/export`;
  const request = new Request(downloadUrl, {
    method: "GET",
    headers: getAuthHeader(),
  });

  const handleExport = useCallback(async () => {
    try {
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentDisposition = response.headers.get("Content-Disposition");
      const filename =
        contentDisposition?.split("filename=")[1].replace(/"/g, "") ||
        "parsing.xlsx";

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();

      notify("Export started", { type: "info" });

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        notify("Export successfully finished", { type: "success" });
      }, 1000);
    } catch (error) {
      notify(`Export failed: ${error}`, { type: "error" });
    }
  }, [notify]);

  return { handleExport };
};
