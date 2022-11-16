import { Navigate, useOutlet } from "react-router-dom"
import { useWallet } from "../../hooks/useWallet";
import Navbar from "../Navbar";

const ProtectedLayout = () => {
  const { accountId } = useWallet()
  const outlet = useOutlet();

  if (!accountId) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      {outlet}
    </div>
  );
};

export default ProtectedLayout
