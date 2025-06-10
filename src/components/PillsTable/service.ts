import { useId } from "react";
import { ParsedItem, ParsedPharmacies } from "../../types/parsed.ts";
import { PillsTableService } from "./types.ts";

export const usePillsTableService = (): PillsTableService => {
  const id = useId();
  const pKey = `${id}.datagrid`;
  const omittedCols = ["searchValue", "producer", "error"];

  const renderCreationDate = (record: ParsedItem): string => {
    const dateObj = new Date(record.createdAt);

    return dateObj.toLocaleDateString("ru-RU", {
      timeZone: "UTC",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const renderPharmacy = (record: ParsedItem): string => {
    return ParsedPharmacies[record.pharmacy];
  };

  return {
    pKey,
    omittedCols,
    renderCreationDate,
    renderPharmacy,
  };
};
