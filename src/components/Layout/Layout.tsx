import { Layout } from "react-admin";
import { AppLayoutProps } from "./types";
import AppMenu from "../Menu/Menu.tsx";
import AppBarCustom from "../Bar/Bar.tsx";

const AppLayout = (props: AppLayoutProps) => {
  return (
    <Layout appBar={AppBarCustom} menu={AppMenu} {...props}>
      {props.children}
    </Layout>
  );
};

export default AppLayout;
