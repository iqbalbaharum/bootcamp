import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// near api js
import { keyStores, providers } from 'near-api-js';

// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import LedgerIconUrl from '@near-wallet-selector/ledger/assets/ledger-icon.png';
import MyNearIconUrl from '@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png';

// wallet selector options
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupLedger } from '@near-wallet-selector/ledger';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { beApi } from "../services/api";

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
      const accountId = walletSelector.store.getState().accounts[0].accountId;
      

      const keystore = new keyStores.BrowserLocalStorageKeyStore()
      const keyPair = await keystore.getKey(network, accountId)

      // get nonce
      const nonce = await getNonce(accountId)

      if(nonce.data) {
        const msg = Buffer.from(nonce.data);
        const { signature } = keyPair.sign(msg)

        const data = {
          account: accountId,
          publicAddress: keyPair.publicKey.toString(),
          signature: Buffer.from(signature).toString('base64')
        }

        try {
          const response = await beApi({
            method: 'POST',
            url: '/auth/near',
            data
          })

          window.localStorage.setItem('token', response.data.jwt || '')

        } catch(e) {
          console.log(e)
        }
        
        setWallet(wallet)
        setAccountId(accountId)
      }
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

  const getNonce = async (accountId) => {
    return beApi({
      method: 'GET',
      url: `/auth/nonce?address=${accountId}`
    })
  }

  // Sign-out method
  const signOut = () => {
    wallet.signOut();

    setWallet(null)
    setAccountId(null)
    setContractId(null)
    
    window.location.replace(window.location.origin + window.location.pathname);
  }

  const viewMethod = async (contractId, method, args = {}) => {
    if(!walletSelector) { return }

    const { network } = walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    let res = await provider.query({
      request_type: 'call_function',
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: 'optimistic',
    });

    return JSON.parse(Buffer.from(res.result).toString());
  }

  const callMethod = async ({ contractId, method, args = {}, gas = process.env.THIRTY_TGAS, deposit = process.env.DEPOSIT }) => {
    // Sign a transaction with the "FunctionCall" action
    console.log(args, JSON.stringify(args))
    return await wallet.signAndSendTransaction({
      signerId: accountId,
      receiverId: contractId,
      actions: [
        {
          type: 'FunctionCall',
          params: {
            methodName: method,
            args,
            gas,
            deposit,
          },
        },
      ],
    });
  }

  const value = {
    wallet,
    accountId,
    contractId,
    startUp,
    signIn,
    signOut,
    viewMethod,
    callMethod
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export const useWallet = () => {
  return useContext(WalletContext);
};