import { deepmerge } from "@mui/utils";
import { bwDarkTheme, bwLightTheme } from "react-admin";

const lightTheme = deepmerge(bwLightTheme, {
  components: {
    RaLogin: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
          backgroundBlendMode: "multiply,multiply",
        },
      },
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          padding: "4px 0 4px 0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "20px",
          "&.RaSelectArrayInput-chip": {
            marginTop: 0,
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small",
      },
    },
  },
});

const darkTheme = deepmerge(bwDarkTheme, {
  components: {
    RaLogin: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
          backgroundBlendMode: "multiply,multiply",
        },
      },
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          padding: "4px 0 4px 0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "20px",
          "&.RaSelectArrayInput-chip": {
            marginTop: 0,
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small",
      },
    },
  },
});

export { lightTheme, darkTheme };
