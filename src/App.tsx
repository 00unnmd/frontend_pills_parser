import {
  Admin,
  DataProvider,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PillsTable } from "./components/Pills.tsx";
import { Dataset, Timeline } from "@mui/icons-material";
import { Dashboard } from "./components/Dashboard.tsx";
import { authProvider } from "./authProvider.tsx";

const dataProvider: DataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com",
);

export const App = () => {
  return (
    <Admin
      // loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={PillsTable}
        show={ShowGuesser}
        icon={Dataset}
      />
      <Resource name="posts" list={ListGuesser} icon={Timeline} />
    </Admin>
  );
};
