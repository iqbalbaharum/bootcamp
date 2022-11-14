import ipfsClient from 'ipfs-http-client'
import { useEffect, useState } from 'react'

let ipfs = null

export default function useIpfsFactory () {
  const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
  const [ipfsInitError, setIpfsInitError] = useState(null)

  useEffect(() => {
    startIpfs()
    return function cleanup () {
      if (ipfs && ipfs.stop) {
        console.log('Stopping IPFS')
        ipfs.stop().catch(err => console.error(err))
        ipfs = null
        setIpfsReady(false)
      }
    }
  }, [])

  async function startIpfs () {
    if (ipfs) {
      console.log('IPFS already started')
    } else if (window.ipfs && window.ipfs.enable) {
      console.log('Found window.ipfs')
      ipfs = await window.ipfs.enable()
    } else {
      try {
        console.log('IPFS Started')

        const projectId = '2HDrQBzBA6e4Elmdwhpa6Mjg1Qs'
        const projectSecret = 'a8a2d7f469b2e8dbfc4dece05bdde035'

        const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
        ipfs = await ipfsClient({
          host: 'ipfs.infura.io',
          port: 5001,
          protocol: 'https',
          headers: {
            authorization: auth
          }
        })
      } catch (error) {
        console.error('IPFS init error:', error)
        ipfs = null
        setIpfsInitError(error)
      }
    }

    setIpfsReady(Boolean(ipfs))
  }

  return { ipfs, isIpfsReady, ipfsInitError }
}