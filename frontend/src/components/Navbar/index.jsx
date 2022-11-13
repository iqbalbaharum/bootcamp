import React from "react";
import { useEffect } from "react";
import logo from "../../../assets/img/logoSmall.png";
import { useWallet } from "../../hooks/useWallet";
import { AuthEnabled } from "./AuthEnabled";

const navigation = [
  { name: "My Profile", href: "/profile/form", current: false },
  // { name: "Jobs", href: "#", current: false },
  // { name: "Career Hub", href: "#", current: false },
  // { name: "Rent Talent", href: "#", current: false },
  // { name: "Academy", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavButton(props) {
  return (
    <li>
      <a
        className={classNames(
          props.nav.current
            ? "bg-black text-[#DAFF3E]"
            : "border-black text-black hover:bg-[#DAFF3E]",
          "border-2 rounded-full px-4 py-2 font-bold"
        )}
        href={props.nav.href}
      >
        {props.nav.name}
      </a>
    </li>
  );
}

function NavsEnabled() {
  return (
    <>
      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-1 font-robotoMono">
            {navigation.map((nav) => <NavButton nav={nav} key={nav.name} />)}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default function Navbar(props) {

  const { wallet, accountId } = useWallet()

  return (
    <header aria-label="SEED Header">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" className="w-[140px] h-[40px]" />
            </a>
          </div>

          {props.isNavEnabled && <NavsEnabled />}

          <AuthEnabled />
          
        </div>
      </div>
    </header>
  );
}
