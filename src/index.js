import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { getBirds } from "./database/birds";

// getBirds().then((birds) => {
//   console.log(birds);
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
