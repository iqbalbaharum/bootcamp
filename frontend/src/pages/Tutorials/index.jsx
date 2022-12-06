import { useNavigate } from "react-router-dom"
import ArticleCard from "./ArticleCard"
import TutorialArray from '../../data/tutorials.json'
import { useEffect } from "react"
import { useState } from "react"

const Tutorials = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(TutorialArray)
  }, [posts])

  const navigate = useNavigate()

  const onHandleArticleClick = (tutorial) => {
    navigate(`/academy/tutorial/${tutorial.id}`, {state: { tutorial: tutorial}})
  }

  return (
    <div className="container mx-auto mt-10">
      <div class="grid grid-cols-3 gap-4">
        {posts && posts.map((tutorial) =>
          (<ArticleCard tutorial={tutorial} key={tutorial.id} onHandleArticleClick={e => onHandleArticleClick(tutorial)} />)
        )}
      </div>
    </div>
  )
}

export default Tutorials