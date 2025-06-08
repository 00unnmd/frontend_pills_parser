import { Menu } from "react-admin";
import { AppMenuProps } from "./types.ts";

const AppMenu = (props: AppMenuProps) => {
  return (
    <Menu {...props}>
      <Menu.DashboardItem />
      <Menu.ResourceItems />
    </Menu>
  );
};

export default AppMenu;
