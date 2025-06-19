import { Admin, Resource } from "react-admin";
import { Dataset } from "@mui/icons-material";
import { authProvider, dataProvider, i18nProvider } from "./providers";
import { AppBarLayout, Dashboard, PillsTable } from "./components";
import { darkTheme, lightTheme } from "./utils/themes.ts";

export const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      layout={AppBarLayout}
      theme={lightTheme}
      darkTheme={darkTheme}
    >
      <Resource
        name="pills/ozon"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "ОЗОН" }}
      />
      <Resource
        name="pills/mnn"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "МНН" }}
      />
      <Resource
        name="pills/competitors"
        list={PillsTable}
        icon={Dataset}
        options={{ label: "Конкуренты" }}
      />
    </Admin>
  );
};
