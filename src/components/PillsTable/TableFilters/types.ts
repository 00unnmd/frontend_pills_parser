import React from "react";
import { OptionItem } from "../../../types/options.ts";
import { SortPayload } from "react-admin";
import { ParsedPharmacies } from "../../../types/parsed.ts";

export type PillsTableFilter = {
  createdAt: string[];
  pharmacy: keyof (typeof ParsedPharmacies)[];
  region: string[];
  name: string;
  mnn: string;
  producer: string;
  searchValue: string;
};

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
