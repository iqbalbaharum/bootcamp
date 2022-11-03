import { useContext } from 'react'
import { NearWalletContext } from '../../../context/wallet.context';


const LoginButton = ({ wallet }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-md bg-[#BD33FF] px-5 py-2.5 text-bold text-white"
        onClick={wallet.signIn()}
      >
        Login
      </button>
      <div className="hidden sm:flex">
      <a className="rounded-md bg-black px-5 py-2.5 text-white" href="/">
        Register
      </a>
    </div>
    </>
  )
}

const ShowAccountId = ({ wallet }) => {
  return (
    <div className="rounded-md px-5 py-2.5 text-bold text-black ">
      {wallet.accountId}
    </div>
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