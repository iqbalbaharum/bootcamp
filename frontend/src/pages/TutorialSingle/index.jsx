import { useLocation, useParams } from 'react-router-dom'
import DifficultyBadge from '../../components/DifficultyBadge'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from "remark-breaks";
import remarkRehype from 'remark-rehype'
import { useState } from 'react'
import TutorialArray from '../../data/tutorials.json'
import { useEffect } from 'react'

const TutorialSingle = () => {

  const { id } = useParams()

  const [tutorial, setTutorial] = useState({})
  const [content, setContent] = useState('');
  
  useEffect(() => {

    const fetchUrl = async (url) => {
      try {
        let d = await fetch(url)
        let content = await d.text()
        setContent(content)
      } catch(e) {
        console.log(e)
      }
    }

    const tutorial = TutorialArray.find((e) => e.id === parseInt(id))
    setTutorial(tutorial)

    fetchUrl(`${process.env.IPFS_GATEWAY}/${tutorial.content}`)
  }, tutorial)


  return (
    <div className="container mx-auto mt-10 text-left">
      {tutorial && (
        <>
          <a href="#">
            <h2 className="my-1 text-4xl font-medium text-gray-900">
              {tutorial.title}
            </h2>
          </a>

          <div className="flex space-x-1 mt-2 mb-5">
            <span
                className="whitespace-nowrap uppercase font-[500] rounded-full px-4 py-1 text-xs bg-red-100"
              >
              {tutorial.chain}
            </span>
            <DifficultyBadge difficulty={tutorial.difficulty} />
          </div>

          <hr />

          <div class="grid grid-cols-3 gap-4 mt-5">
            <div class="col-span-2 ...">
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose" children={content} />
            </div>
            <div class="...">
              <p>Table of Content</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TutorialSingle