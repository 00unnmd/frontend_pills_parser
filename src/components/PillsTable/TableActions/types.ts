import { ToolbarProps } from "react-admin";

export type PillsTableActionsProps = ToolbarProps & {
  datagridKey: string;
};

export type ExportPillsButtonService = {
  handleExport(): void;
};
