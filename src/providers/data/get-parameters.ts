import { PillsTableFilter } from "../../components/PillsTable/TableFilters/types.ts";

type TableQueryObj = {
  page?: string;
  perPage?: string;
  sort?: string;
  order: string;
  tableName?: string;
};

export const getParametersStr = (
  query: TableQueryObj,
  filter: PillsTableFilter,
): string => {
  const parameters = new URLSearchParams(query);

  Object.entries(filter).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => parameters.append(key, item));
    } else {
      if (typeof value === "string" && value.length) {
        parameters.append(key, value);
      }
    }
  });

  return parameters.toString();
};
