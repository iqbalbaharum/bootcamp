import HackCard from "./HackCard"

const hackathons = [
  {
    "type": "bootcamp",
    "title": "NEAR x Google Bootcamp for Beginner",
    "start_date": "2022-12-05T00:00:00+0000",
    "end_date": "2022-12-17T00:00:00+0000",
    "logo": "ipfs://"
  },
  {
    "type": "hackathon",
    "title": "NEAR hackathon",
    "start_date": "2022-12-05T00:00:00+0000",
    "end_date": "2022-12-17T00:00:00+0000",
    "logo": "ipfs://"
  }
]

const Hackathons = () => {
  return (
    <div className="container mx-auto mt-10 text-left">
      <h2 className="my-1 text-4xl font-medium text-gray-900">
        Upcoming
      </h2>
      <div class="grid grid-cols-3 gap-4 mt-5">
        {hackathons.map((hack) => <HackCard hack={hack} />)}
      </div>
    </div>
  )
}

export default Hackathons