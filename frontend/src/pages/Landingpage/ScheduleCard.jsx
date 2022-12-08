const ScheduleCard = ({ schedule }) => {
  return (
    <div
      className="text-left border-2 border-black rounded-lg border p-4 shadow-sm transition shadow-lg sm:p-6 mt-5"
    >
      <h2 className="text-xl font-bold text-blue-400">
        {schedule.time}
      </h2>

      <h2 className="my-1 text-2xl font-medium text-gray-900">
        {schedule.title}
      </h2>

      <p className="mt-1 text-sm leading-relaxed text-gray-700 line-clamp-3">
        {schedule.speakers.map((speaker, index) => {

          let comma = ''

          if(index > 0) {
            comma += ', '
          }

          return (`${comma} ${speaker.name}`)
        })}
      </p>
    </div>
  )
}

export default ScheduleCard