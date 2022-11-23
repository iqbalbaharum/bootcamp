import { useOutlet } from "react-router-dom"
import { useWallet } from "../../hooks/useWallet"
import Navbar from "../Navbar"

const NavbarLayout = (props) => {

  const {accountId, startUp} = useWallet()
  const outlet = useOutlet();

  if(!accountId) {
    startUp()
  }

  return (<>
    <Navbar isNavEnabled={true} isAuthEnabled={true} />
    {outlet}
  </>)
}

export default NavbarLayout