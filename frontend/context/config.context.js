import react, { createContext } from 'react'

export const ConfigContext = createContext({
  isAuthEnabled: true,
  isNavsEnabled: false
})