import React from "react";
import { Box } from "@mui/material";
import { APP_VERSION } from "../../utils/constants.ts";

export const AppVersion = (): React.JSX.Element => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      margin: "0 8px",
      fontSize: 8,
      color: "#aaaaaa",
    }}
  >
    <span>{APP_VERSION}</span>
    <span>by unnmd</span>
  </Box>
);
