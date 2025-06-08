import { useDataProvider, useNotify } from "react-admin";
import { useCallback } from "react";
import { ExportPillsButtonService } from "./types.ts";
import { MyDataProvider } from "../../../providers/dataProvider.ts";

export const useExportPillsButton = (): ExportPillsButtonService => {
  const dataProvider = useDataProvider<MyDataProvider>();
  const notify = useNotify();

  const handleExport = useCallback(async () => {
    dataProvider.exportPillsXLSX().then((res) => {
      const objUrl = window.URL.createObjectURL(res.blob);
      const link = document.createElement("a");

      link.href = objUrl;
      link.download = res.filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();

      notify("Начало экспорта...", { type: "info" });

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        notify("Экспорт успешно завершен!", { type: "success" });
      }, 1000);
    });
  }, [notify]);

  return { handleExport };
};
