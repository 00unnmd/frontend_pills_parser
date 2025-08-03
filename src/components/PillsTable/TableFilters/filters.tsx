import {
  ResourceContextValue,
  SelectArrayInput,
  SortPayload,
  TextInput,
  useAuthState,
  useDataProvider,
  useResourceContext,
} from "react-admin";
import { useEffect, useState } from "react";
import {
  PillsOptions,
  PillsOptionsItem,
  PillsTableFiltersService,
} from "./types.ts";
import { AppDataProvider } from "../../../providers/data/dataProvider.ts";

const pillsTableSort: SortPayload = {
  field: "createdAt",
  order: "DESC",
};

export const usePillsTableFilters = (): PillsTableFiltersService => {
  const { authenticated } = useAuthState();
  const dataProvider = useDataProvider<AppDataProvider>();
  const resource = useResourceContext();
  const [currentResOptions, _setCurrentResOptions] =
    useState<PillsOptionsItem>();

  useEffect(() => {
    if (!resource || !authenticated) {
      return;
    }

    const pillsOptions = sessionStorage.getItem("pillsOptions");
    if (!pillsOptions) {
      dataProvider.getPillsOptions().then((options) => {
        setCurrentResOptions(resource, options);
        sessionStorage.setItem("pillsOptions", JSON.stringify(options));
      });
    } else {
      const parsedPillsOptions = JSON.parse(pillsOptions) as PillsOptions;
      setCurrentResOptions(resource, parsedPillsOptions);
    }
  }, [resource, authenticated]);

  const setCurrentResOptions = (
    resource: ResourceContextValue,
    options: PillsOptions,
  ) => {
    const resName = resource!.split("/")[1] as keyof PillsOptions;
    if (resName in options) {
      _setCurrentResOptions(options[resName]);
    }
  };

  return {
    pillsTableSort,
    pillsTableFilters: [
      <SelectArrayInput
        key="dateFilter"
        source="createdAt"
        label="Фильтр по дате"
        choices={currentResOptions?.dates}
      />,
      <SelectArrayInput
        key="pharmacyFilter"
        source="pharmacy"
        label="Фильтр по аптеке"
        choices={currentResOptions?.pharmacies}
      />,
      <SelectArrayInput
        key="regionFilter"
        source="region"
        label="Фильтр по региону"
        choices={currentResOptions?.regions}
      />,
      <TextInput
        key="pillNameSearch"
        source="name"
        label="Поиск по названию препарата"
        resettable
      />,
      <TextInput
        key="mnnSearch"
        source="mnn"
        label="Поиск по МНН"
        resettable
      />,
      <TextInput
        key="producerSearch"
        source="producer"
        label="Поиск по производителю"
        resettable
      />,
      <TextInput
        key="searchValueSearch"
        source="searchValue"
        label="Поиск по искомому значению"
        resettable
      />,
    ],
  };
};
