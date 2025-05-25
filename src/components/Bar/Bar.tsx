import { AppBar, Layout } from "react-admin";
import { AppBarLayoutProps } from "./types";

const AppBarCustom = () => <AppBar color="default" />;

const AppBarLayout = (props: AppBarLayoutProps) => {
  return <Layout appBar={AppBarCustom}>{props.children}</Layout>;
};

export default AppBarLayout;
