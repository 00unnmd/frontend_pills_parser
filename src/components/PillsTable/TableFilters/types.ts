import React from "react";
import { OptionItem } from "../../../types/options.ts";
import { SortPayload } from "react-admin";

export type PillsOptionsItem = {
  regions: OptionItem[];
  dates: OptionItem[];
  pharmacies: OptionItem[];
};

export type PillsOptions = Record<
  "ozon" | "mnn" | "competitors",
  PillsOptionsItem
>;

export type PillsTableFiltersService = {
  pillsTableSort: SortPayload;
  pillsTableFilters: React.ReactElement[];
};
