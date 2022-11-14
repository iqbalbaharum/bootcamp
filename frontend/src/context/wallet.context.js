import { createContext } from 'react'

export const NearWalletContext = createContext({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {}
})