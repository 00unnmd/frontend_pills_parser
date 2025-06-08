import { ListProps } from "react-admin";
import { ParsedItem } from "../../types/parsed.ts";

export type PillsTableProps = ListProps;

export type PillsTableService = {
  pKey: string;
  omittedCols: string[];
  renderCreationDate(record: ParsedItem): string;
  renderPharmacy(record: ParsedItem): string;
};
