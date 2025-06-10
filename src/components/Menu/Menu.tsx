import { Menu } from "react-admin";
import { AppMenuProps } from "./types.ts";
import { AppVersion } from "./AppVersion.tsx";

const AppMenu = (props: AppMenuProps) => {
  return (
    <Menu {...props}>
      <Menu.DashboardItem />
      <Menu.ResourceItems />

      <AppVersion />
    </Menu>
  );
};

export default AppMenu;
