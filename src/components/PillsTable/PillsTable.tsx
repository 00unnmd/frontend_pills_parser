import {
  Authenticated,
  DatagridConfigurable,
  FunctionField,
  List,
  TextField,
} from "react-admin";
import { usePillsTableService } from "./service.ts";
import { PillsTableProps } from "./types.ts";
import { PillsTableActions } from "./TableActions/PillsTableActions.tsx";
import { usePillsTableFilters } from "./TableFilters/filters.tsx";

const PillsTable = (props: PillsTableProps) => {
  const service = usePillsTableService();
  const { pillsTableSort, pillsTableFilters } = usePillsTableFilters();

  return (
    <Authenticated>
      <List
        {...props}
        actions={<PillsTableActions datagridKey={service.pKey} />}
        sort={pillsTableSort}
        filters={pillsTableFilters}
      >
        <DatagridConfigurable
          bulkActionButtons={false}
          omit={service.omittedCols}
          preferenceKey={service.pKey}
        >
          <FunctionField
            source="createdAt"
            label="Дата создания"
            render={service.renderCreationDate}
          />
          <FunctionField
            source="pharmacy"
            label="Аптека"
            render={service.renderPharmacy}
          />
          <TextField source="region" label="Регион" />
          <TextField source="name" label="Название" />
          <TextField source="mnn" label="МНН" />
          <TextField source="price" label="Цена" />
          <TextField source="discount" label="Скидка" />
          <TextField source="discountPercent" label="Процент скидки" />
          <TextField source="producer" label="Производитель" />
          <TextField source="rating" label="Рейтинг" />
          <TextField source="reviewsCount" label="Кол-во отзывов" />
          <TextField source="searchValue" label="Искомое значение" />
          <TextField source="error" label="Ошибка" />
        </DatagridConfigurable>
      </List>
    </Authenticated>
  );
};

export default PillsTable;
