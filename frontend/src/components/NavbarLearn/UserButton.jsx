import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const UserButton = ({ wallet, accountId }) => {

  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  
  const OnClickDropdown = () => {
    setIsOpen(!isOpen)
  }

  const onHandleClickLogout = () => {
    wallet.signOut()
    navigate('/#/login')
  }

  const onHandleGoToDashboard = () => {
    navigate('/#/user/dashboard')
    setIsOpen(!isOpen)
  }

  return (
    <div className="inline-flex items-stretch rounded-md border border-black bg-white">
      <a
        href=""
        className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
      >
        {accountId}
      </a>

      <div className={isOpen ? '': 'relative'} >
        <button
          type="button"
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-black px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={OnClickDropdown}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className="absolute text-left right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="flow-root py-2">
            <div className="-my-2 divide-y divide-gray-100">
              <div className="p-2">
                <Link
                  to="/user/dashboard"
                  onClick={onHandleGoToDashboard}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Dashboard
                </Link>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                  onClick={onHandleClickLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>

                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserButton