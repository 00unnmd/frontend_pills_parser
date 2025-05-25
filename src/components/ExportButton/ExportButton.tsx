import FileDownload from "@mui/icons-material/FileDownload";
import { Button } from "react-admin";
import { useExportPillsButton } from "./service.ts";

const ExportPillsButton = () => {
  const service = useExportPillsButton();

  return (
    <Button
      label="SAVE_XLSX"
      color="inherit"
      onClick={service.handleExport}
      startIcon={<FileDownload />}
      size="medium"
    />
  );
};

export default ExportPillsButton;
