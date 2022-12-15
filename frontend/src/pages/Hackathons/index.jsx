import { useNavigate } from "react-router-dom"
import HackCard from "./HackCard"

import { Fluence } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';

const hackathons = [
  // {
  //   "id": 1,
  //   "type": "bootcamp",
  //   "title": "NEAR x Google Bootcamp for Beginner",
  //   "start_date": "2022-12-05T00:00:00+0000",
  //   "end_date": "2022-12-17T00:00:00+0000",
  //   "logo": "ipfs://"
  // },
  {
    "id": 1,
    "type": "Hackathon",
    "title": "BUIDL on NEAR Mini Hackathon",
    "start_date": "2022-12-05T00:00:00+0000",
    "end_date": "2022-12-17T00:00:00+0000",
    "logo": "ipfs://",
    "submission_url": "https://tally.so/r/mYjpvJ"
  }
]

const Hackathons = () => {

  const navigate = useNavigate()

  const onHandleHackClick = (id) => {
    navigate(`/#/event/${id}/home`)
  }

  return (
    <div className="container mx-auto mt-10 text-left">
      <h2 className="my-1 text-4xl font-medium text-gray-900">
        Upcoming
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {hackathons.map((hack, index) => <HackCard hack={hack} onHandleHackClick={onHandleHackClick} key={index} />)}
      </div>
    </div>
  )
}

export default Hackathons