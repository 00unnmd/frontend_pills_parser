import { AppBar } from "react-admin";
import { AppBarCustomProps } from "./types.ts";

const AppBarCustom = (props: AppBarCustomProps) => (
  <AppBar color="default" {...props} />
);

export default AppBarCustom;
