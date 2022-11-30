import { useNavigate } from "react-router-dom"
import ArticleCard from "./ArticleCard"

const posts = [
  {
    "id": 0,
    "chain": "NEAR",
    "title": "Stats Gallery",
    "difficulty": "beginner",
    "description": "Discover the power of your NEAR account and pursue quests for glory on a public blockchain",
    "content": "ipfs://"
  },
  {
    "id": 1,
    "chain": "NEAR",
    "title": "Stats Gallery",
    "difficulty": "intermediate",
    "description": "Discover the power of your NEAR account and pursue quests for glory on a public blockchain",
    "content": "ipfs://"
  },
  {
    "id": 2,
    "chain": "NEAR",
    "title": "Stats Gallery",
    "difficulty": "hard",
    "description": "Discover the power of your NEAR account and pursue quests for glory on a public blockchain",
    "content": "ipfs://"
  }
]
const Tutorials = () => {

  // const [posts, setPosts] = ([])

  const navigate = useNavigate()

  const onHandleArticleClick = (tutorial) => {
    navigate(`/academy/tutorial/${tutorial.id}`, {state: { tutorial: tutorial}})
  }

  return (
    <div className="container mx-auto mt-10">
      <div class="grid grid-cols-3 gap-4">
        {posts.map((tutorial) =>
          (<ArticleCard tutorial={tutorial} key={tutorial.id} onHandleArticleClick={e => onHandleArticleClick(tutorial)} />)
        )}
      </div>
    </div>
  )
}

export default Tutorials