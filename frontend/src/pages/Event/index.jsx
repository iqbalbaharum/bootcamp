import { useParams } from "react-router-dom"

const EventDashboardMenu = ({id}) => {
  return (
    <nav aria-label="Main Nav" class="flex flex-col space-y-1 py-5">
      <a href={`/event/${id}/home`} class="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      
        <span class="ml-3 text-sm font-medium"> Dashboard </span>
      </a>

      <a
        href={`/event/${id}/project`}
        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Project
      </a>

      <a
        href={`/event/${id}/vote`}
        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Voting
      </a>
    </nav>
  )
}
const Event = () => {

  const { id } = useParams()

  return (
    <div className="container mx-auto mt-10 text-left">
      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="rounded-2xl border border-black py-3 px-3">
          <EventDashboardMenu id={id} />
        </div>
        <div className="col-span-4 text-left rounded-2xl border border-black py-10 px-10 shadow-lg">
          <div className="">
            <h2 className="flex justify-between my-1">
              <span class="text-3xl font-medium text-gray-900">Profile</span>
              <a href={`/user/profile/form`} className="text-sm rounded-full border border-gray-600 px-4 py-2">Edit Profile</a>
            </h2>
            <p className="font-sm text-gray-600">You have not completed your profle yet.</p>
          </div>
          <hr className="my-10" />
          <div className="">
            <h2 className="flex justify-between my-1">
              <span class="text-3xl font-medium text-gray-900">Projects</span>
              <a href={`/event/${id}/project`} className="text-sm rounded-full border border-gray-600 px-4 py-2">Create/Edit Project</a>
            </h2>
            <p className="font-sm text-gray-600">You have not created a project yet.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Event