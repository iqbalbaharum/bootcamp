import { useNavigate } from "react-router-dom"
import HackCard from "../Hackathons/HackCard"
import MyHackCard from "./MyHackCard"

const myhackathons = [
  {
    "id": 1,
    "type": "bootcamp",
    "title": "NEAR x Google Bootcamp for Beginner",
    "start_date": "2022-12-05T00:00:00+0000",
    "end_date": "2022-12-17T00:00:00+0000",
    "logo": "ipfs://",
    "status": "registered"
  }
]

const Dashboard = () => {

  const navigate = useNavigate()

  const onHandleMyHackathonClicked = (hack) => {
    switch(hack.status) {
      case 'registered':
      case 'draft':
        navigate(`/academy/event/${hack.id}/home`)
        break
      case 'submit':
        break
    }
  }

  return (
    <div className="container mx-auto mt-10 text-left">
      <h2 className="my-1 text-4xl font-medium text-gray-900">
        My Hackathons
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {myhackathons.map((hack) => <MyHackCard key={hack.id} hack={hack} onHandleHackClick={e => onHandleMyHackathonClicked(hack)} />)}
      </div>
    </div>
  )
}

export default Dashboard