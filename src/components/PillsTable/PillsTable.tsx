import {
  DatagridConfigurable,
  List,
  SortPayload,
  TextField,
  TextInput,
} from "react-admin";
import ExportPillsButton from "../ExportButton/ExportButton.tsx";

const PillsTableActions = () => <ExportPillsButton />;

const pillsFilters = [
  <TextInput
    key="pillNameSearch"
    source="q"
    label="Поиск по названию препарата"
    resettable
    alwaysOn
    sx={{ width: "30rem" }}
    // @ts-ignore
    color="default"
  />,
];

const pillsSort: SortPayload = {
  field: "name",
  order: "ASC",
};

const PillsTable = () => (
  <List actions={<PillsTableActions />} filters={pillsFilters} sort={pillsSort}>
    <DatagridConfigurable bulkActionButtons={false}>
      <TextField source="region" label="Регион" />
      <TextField source="name" label="Название" />
      <TextField source="price" label="Цена" />
      <TextField source="discount" label="Скидка" />
      <TextField source="priceOld" label="Цена без скидки" />
      <TextField source="maxQuantity" label="Остаток" />
      <TextField source="producer" label="Производитель" />
      <TextField source="rating" label="Рейтинг" />
      <TextField source="reviewsCount" label="Кол-во отзывов" />
      <TextField source="error" label="Ошибка" />
    </DatagridConfigurable>
  </List>
);

export default PillsTable;
