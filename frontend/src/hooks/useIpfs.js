import { useState, useEffect } from 'react'
import { getProperty } from 'dot-prop'
import { defaultBootstraps } from '../utils/config'

export default function useIpfs (ipfs, cmd, opts) {
  const [res, setRes] = useState(null)
  useEffect(() => {
    callIpfs(ipfs, cmd, setRes, opts)
    initIpfs(defaultB)
  }, [ipfs, cmd, opts])
  return res
}

async function callIpfs (ipfs, cmd, setRes, ...opts) {
  if (!ipfs) return null
  console.log(`Call ipfs.${cmd}`)
  const ipfsCmd = getProperty(ipfs, cmd)
  console.log(ipfsCmd)
  const res = await ipfsCmd(...opts)
  console.log(`Result ipfs.${cmd}`, res)
  setRes(res)
}