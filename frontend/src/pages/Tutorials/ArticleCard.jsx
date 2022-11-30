import { useNavigate } from "react-router-dom";
import DifficultyBadge from '../../components/DifficultyBadge'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ArticleCard = ({ tutorial, onHandleArticleClick }) => {
  return (
    <a
      className="text-left border-2 border-black rounded-lg border p-4 shadow-sm transition shadow-lg sm:p-6 cursor-pointer"
      onClick={onHandleArticleClick}
    >
      <span className="inline-block rounded p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="black"
          viewBox="0 0 90.1 90"
          stroke="currentColor"
        >
          <path d="M72.2,4.6L53.4,32.5c-1.3,1.9,1.2,4.2,3,2.6L74.9,19c0.5-0.4,1.2-0.1,1.2,0.6v50.3c0,0.7-0.9,1-1.3,0.5l-56-67
	C17,1.2,14.4,0,11.5,0h-2C4.3,0,0,4.3,0,9.6v70.8C0,85.7,4.3,90,9.6,90c3.3,0,6.4-1.7,8.2-4.6l18.8-27.9c1.3-1.9-1.2-4.2-3-2.6
	l-18.5,16c-0.5,0.4-1.2,0.1-1.2-0.6V20.1c0-0.7,0.9-1,1.3-0.5l56,67c1.8,2.2,4.5,3.4,7.3,3.4h2c5.3,0,9.6-4.3,9.6-9.6V9.6
	c0-5.3-4.3-9.6-9.6-9.6C77.1,0,74,1.7,72.2,4.6z"/>
        </svg>
      </span>

      <a href="#">
        <h2 className="my-1 text-2xl font-medium text-gray-900">
          {tutorial.title}
        </h2>
      </a>

      <DifficultyBadge difficulty={tutorial.difficulty} />

      <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        {tutorial.description}
      </p>
    </a>
  )
}

export default ArticleCard