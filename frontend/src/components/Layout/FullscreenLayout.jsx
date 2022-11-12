import { Outlet } from "react-router-dom"
import logo from "../../../assets/img/logoSmall.png";

const FullScreenLayout = () => {
  return (<>
    <header aria-label="SEED Header">
      {/* <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-transparent relative">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" className="w-[140px] h-[40px]" />
            </a>
          </div>
        </div>
      </div> */}
    </header>
    <Outlet />
  </>)
}

export default FullScreenLayout