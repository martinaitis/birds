import React from "react";
import { Box } from "@mui/material/";
import { grey } from "@mui/material/colors";
import Header from "./Header";

function Page(props) {
  const { children } = props;

  return (
    <>
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            backgroundColor: grey[50],
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Page;
