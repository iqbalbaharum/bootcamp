import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NearWalletContext } from '../../context/wallet.context';
import useIpfsFactory from '../../hooks/useIpfsFactory';


const LoginButton = ({ wallet }) => {

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

const ShowAccountId = ({ wallet }) => {

  const navigate = useNavigate()

  const goToJobCreationPage = () => {
    navigate('/job/create')
  }

  const { ipfs } = useIpfsFactory({ commands: ['id'] })

  return (
    <>
      <div className="rounded-md px-5 py-2.5 text-bold text-black ">
        {wallet.accountId}
      </div>
      <button
        type="button"
        className="rounded-md bg-[#BD33FF] px-5 py-2.5 text-bold text-white"
        onClick={() => wallet.signOut()}
      >
        Logout
      </button>
      {ipfs && <button
        type="button"
        className="rounded-md bg-[#FF5733] px-5 py-2.5 text-bold text-white"
        onClick={goToJobCreationPage}
      >
        Create Job Post
      </button>}
    </>
  )
}

export const AuthEnabled = () => {
  const walletContext = useContext(NearWalletContext)
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 font-robotoMono text-bold">
        {!walletContext.wallet.accountId ?
          <LoginButton wallet={walletContext.wallet} /> : <ShowAccountId wallet={walletContext.wallet} />}
        </div>
      </div>
    </>
  );
}