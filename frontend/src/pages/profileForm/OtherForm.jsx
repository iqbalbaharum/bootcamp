import react, { useContext } from 'react'
import { ProfileFormContext } from '.'

const OtherForm = () => {

  const profileFormContext = useContext(ProfileFormContext)

  return (
    <div className="px-[10rem] mt-[2rem] font-robotoMono">
    <div className="bg-[#DAFF3E] rounded-xl shadow-md">
      <div className="mx-[5rem] py-[2rem]">
        <div className="text-xl py-sm">
          <b>OTHER</b>
        </div>
        <div>
          <div className="mb-2 text-left py-[2rem]">
            <div className="mb-2 text-left">
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                COUNTRY
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2 text-left py-1">
              <b>
                <input 
                  type="checkbox"
                  name="openToJobOpportunity"
                  value={profileFormContext.openToJobOpportunity}
                  onChange={profileFormContext.handleChange} />
                &nbsp; Open to job opportunity?
              </b>
            </div>
            <div className="mb-2 text-left py-1">
              <b>
                <input 
                  type="checkbox"
                  name="openToRemoteJob"
                  value={profileFormContext.openToRemoteJob}
                  onChange={profileFormContext.handleChange}
                />
                &nbsp; Open to remote job?
              </b>
            </div>
            <div className="mb-2 text-left py-1">
              <b>
                <input 
                  type="checkbox"
                  name="receiveNewJobEmail"
                  value={profileFormContext.receiveNewJobEmail}
                  onChange={profileFormContext.handleChange}
                />
                &nbsp; Received new jobs in your mailbox?
              </b>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OtherForm