import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  ReferenceInput,
} from "react-admin";

const pillsFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PillsTable = () => (
  <List filters={pillsFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      {/*<TextField source="username" />*/}
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      {/*<TextField source="website" />*/}
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
