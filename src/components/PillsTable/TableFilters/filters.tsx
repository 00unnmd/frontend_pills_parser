import {
  SelectArrayInput,
  SortPayload,
  TextInput,
  useAuthState,
  useDataProvider,
  useResourceContext,
  useStore,
} from "react-admin";
import { useEffect, useState } from "react";
import {
  PillsOptions,
  PillsOptionsItem,
  PillsTableFiltersService,
} from "./types.ts";
import { Nullable } from "../../../types/utils.ts";
import { AppDataProvider } from "../../../providers/data/dataProvider.ts";

const pillsTableSort: SortPayload = {
  field: "createdAt",
  order: "DESC",
};
const optionsDefaultValue: Nullable<PillsOptions> = null;

export const usePillsTableFilters = (): PillsTableFiltersService => {
  const { authenticated } = useAuthState();
  const dataProvider = useDataProvider<AppDataProvider>();
  const resource = useResourceContext();
  const [options, setOptions] = useStore<Nullable<PillsOptions>>(
    "options",
    optionsDefaultValue,
  );
  const [currentResOptions, setCurrentResOptions] =
    useState<PillsOptionsItem>();

  /*
  TODO [PLPR-15] проблема с получением новых селект-опций с сервера.
   Если опции уже получены, запрос пропускается, новые опции не отображаются.
   Нужно будет сменить логику для версии v1.2, когда парсинг будет запускаться с клиента
  */
  useEffect(() => {
    if (!resource || !authenticated) {
      return;
    }

    if (!options) {
      dataProvider.getPillsOptions().then(setOptions);
    } else {
      const resName = resource.split("/")[1] as keyof PillsOptions;

      if (resName in options) {
        setCurrentResOptions(options[resName]);
      }
    }
  }, [resource, options, authenticated]);

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
