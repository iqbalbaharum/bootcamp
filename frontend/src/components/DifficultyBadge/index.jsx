const DifficultyBadge = ({ difficulty }) => {

  switch(difficulty) {
    case "beginner":
      return (
        <span
          className="whitespace-nowrap uppercase font-[500] rounded-full px-4 py-1 text-xs bg-purple-100"
        >
          {difficulty}
        </span>
      )
    case "intermediate":
      return (
        <span
          className="whitespace-nowrap uppercase rounded-full px-4 py-1 text-xs font-[500] bg-orange-100"
        >
          {difficulty}
        </span>
      )
    case "hard":
      return (
        <span
          className="whitespace-nowrap uppercase rounded-full px-4 py-1 text-xs font-[500] bg-red-100"
        >
          {difficulty}
        </span>
      )
  }
}

export default DifficultyBadge