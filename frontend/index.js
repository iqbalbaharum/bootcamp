// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// NEAR
import { HelloNEAR } from "./near-interface";
import { Wallet } from "./near-wallet";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  const root = createRoot(document.getElementById("root"));

  root.render(
    <BrowserRouter>
      <App isSignedIn={isSignedIn} wallet={wallet} />
    </BrowserRouter>
  );
};
