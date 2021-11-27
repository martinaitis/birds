import React from "react";
import { Button, Card } from "@mui/material/";
import Page from "./common/Page";

function Quiz() {
  return (
    <Page>
      <Card
        sx={{
          width: "80vw",
          m: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained">Start quiz</Button>
      </Card>
    </Page>
  );
}

export default Quiz;
