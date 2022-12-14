// React
import React from 'react';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { WalletProvider } from './src/hooks/useWallet';
// import { FluenceProvider } from './src/hooks/useFluence';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
// const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

// Setup on page load
window.onload = async () => {
  // const isSignedIn = await wallet.startUp()
  const root = createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <HashRouter>
        <WalletProvider>
          <App />
        </WalletProvider>
      </HashRouter>
    </React.StrictMode>
  );
};
