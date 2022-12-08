import ScheduleCard from "./ScheduleCard"
import schedules from '../../data/schedules.json'
import { Link } from "react-router-dom"

const ScheduleSection = () => {
  return Object.keys(schedules).map((key, index) => {
    return (
      <div className="grid grid-cols-4 gap-4 mt-5" key={index}>
        <div className="... mt-10 text-2xl text-right">
          {key} 
        </div>
        <div className="col-span-3 ...">
          {schedules[key].map((schedule, index) => <ScheduleCard schedule={schedule} key={index} />)}
        </div>
      </div>
    )
  })
}

const FeaturedSection = () => {
  return (
    <section className="">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl font-robotoMono">
            NEAR Seed Bootcamp
          </h1>
          <div className="block text-xl mt-3">
            Your starting point to develop in NEAR ecosystem
          </div>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            8 Dec 2022 - 18 Dec 2022
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/tutorials"
            >
              Tutorials
            </Link>

            {/* <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>


  )
}

const SeedLandingPage = () => {
  return (
    <div className="container mx-auto mt-10 text-left pb-10">
      <FeaturedSection />

      <h1 className="text-3xl font-extrabold sm:text-5xl font-robotoMono text-center pb-5">
        Schedule
      </h1>
      <ScheduleSection />
    </div>
  )
}

export default SeedLandingPage