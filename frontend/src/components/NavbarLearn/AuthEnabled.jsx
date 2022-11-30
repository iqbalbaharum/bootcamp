import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NearWalletContext } from '../../context/wallet.context';
import useIpfsFactory from '../../hooks/useIpfsFactory';
import { useWallet } from '../../hooks/useWallet';
import UserButton from './UserButton';


const LoginButton = () => {

  const navigate = useNavigate()

  return (
    <>
      <button
        type="button"
        className="rounded-md bg-[#BD33FF] px-5 py-2.5 text-bold text-white"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
      <div className="hidden sm:flex">
      <button type="button" className="rounded-md bg-black px-5 py-2.5 text-white" onClick={() => navigate('/register')}>
        Register
      </button>
    </div>
    </>
  )
}

const ShowAccountId = ({ wallet, accountId }) => {

  const navigate = useNavigate()

  const onHandleClickLogout = () => {
    wallet.signOut()
    navigate('/login')
  }

  const { ipfs } = useIpfsFactory({ commands: ['id'] })

  return (
    <UserButton accountId={accountId} wallet={wallet} />
  )
}

export const AuthEnabled = () => {
  const { wallet, accountId } = useWallet()
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 font-robotoMono text-bold">
        {!accountId ?
          <LoginButton /> : <ShowAccountId wallet={wallet} accountId={accountId} />}
        </div>
      </div>
    </>
  );
}