import { Admin, Resource } from "react-admin";
import { Dataset } from "@mui/icons-material";
import { authProvider, dataProvider } from "./providers";
import { AppBarLayout, Dashboard, PillsTable } from "./components";

export const App = () => {
  return (
    <Admin
      // loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={AppBarLayout}
    >
      <Resource
        name="pills/Zdravcity"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "Zdravcity" }}
      />
      <Resource
        name="pills/Aptekaru"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "Aptekaru" }}
      />
      <Resource
        name="pills/Eapteka"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "Eapteka" }}
      />
    </Admin>
  );
};
