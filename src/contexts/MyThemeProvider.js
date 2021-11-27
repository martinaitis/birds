import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function MyThemeProvider(props) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
}

export default MyThemeProvider;
