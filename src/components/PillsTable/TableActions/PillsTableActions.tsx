import {
  ExportButton,
  FilterButton,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";
import { useExportPillsButton } from "./service.ts";
import { PillsTableActionsProps } from "./types.ts";

export const PillsTableActions = (props: PillsTableActionsProps) => {
  const exportService = useExportPillsButton();

  return (
    <TopToolbar>
      <FilterButton size="medium" />
      <SelectColumnsButton preferenceKey={props.datagridKey} size="medium" />
      <ExportButton
        label="SAVE_XLSX"
        size="medium"
        exporter={exportService.handleExport}
      />
    </TopToolbar>
  );
};
