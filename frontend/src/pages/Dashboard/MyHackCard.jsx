const MyHackCard = ({ hack, onHandleHackClick }) => {

  const dateFormat = (d) => {
    const date = new Date(d)
    return date.toDateString()
  }

  return (
    <div
      className="flex flex-col flex-wrap w-full text-left rounded-lg border border-black p-4 shadow-sm transition shadow-lg sm:p-6 cursor-pointer"
      onClick={onHandleHackClick}
    >
      <div>
        <span
          className="border border-black uppercase font-[500] rounded-full px-4 py-1.5 text-xs bg-purple-100"
        >
          {hack.type}
        </span>
      </div>

      <a href="#" className="flex-auto mt-5 mb-10">
        <h2 className="my-1 text-2xl font-medium text-gray-900">
          {hack.title}
        </h2>
      </a>

      <div>
        <span className="mt-auto text-sm text-black line-clamp-3 rounded-full border border-black py-1 px-4 text-grey">
          {dateFormat(hack.start_date)} {" - "} {dateFormat(hack.end_date)}
        </span>
      </div>
    </div>
  )
}

export default MyHackCard