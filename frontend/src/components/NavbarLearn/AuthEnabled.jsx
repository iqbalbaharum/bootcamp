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
        className="border-2 rounded-full px-4 py-2 font-bold border-black text-black bg-[#DAFF3E]"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
      <div className="hidden sm:flex">
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