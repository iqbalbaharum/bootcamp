import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// near api js
import { providers } from 'near-api-js';

// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import LedgerIconUrl from '@near-wallet-selector/ledger/assets/ledger-icon.png';
import MyNearIconUrl from '@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png';

// wallet selector options
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupLedger } from '@near-wallet-selector/ledger';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';

const WalletContext = createContext()


export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState()
  const [accountId, setAccountId] = useState('')
  const [profile, setProfile] = useState()
  const [walletSelector, setWalletSelector] = useState()
  const [contractId, setContractId] = useState(null)

  useEffect(() => {
    if(!walletSelector) {
      startUp()
    }
  }, [walletSelector])

  const startUp = async (network = 'testnet') => {
    const walletSelector = await setupWalletSelector({
      network: network,
      modules: [setupMyNearWallet({ iconUrl: MyNearIconUrl }),
      setupLedger({ iconUrl: LedgerIconUrl })],
    });

    setWalletSelector(walletSelector)

    const isSignedIn = walletSelector.isSignedIn();

    if (isSignedIn) {
      const wallet = await walletSelector.wallet();
      setWallet(wallet)

      const accountId = walletSelector.store.getState().accounts[0].accountId;
      setAccountId(accountId)
    }

    return isSignedIn;
  }

  // Sign-in method
  const signIn = (contractId) => {

    setContractId(contractId)
    const description = 'Please select a wallet to sign in.';
    const modal = setupModal(walletSelector, { contractId, description });
    modal.show();
  }

  // Sign-out method
  const signOut = () => {
    wallet.signOut();

    setWallet(null)
    setAccountId(null)
    setContractId(null)
    
    window.location.replace(window.location.origin + window.location.pathname);
  }

  const value = {
    wallet,
    accountId,
    contractId,
    startUp,
    signIn,
    signOut
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export const useWallet = () => {
  return useContext(WalletContext);
};