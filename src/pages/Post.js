import { useLocation, useParams } from "react-router-dom"

const Post = () => {
  const { id } = useParams()
  const query = new URLSearchParams(useLocation().search)
  // console.log(query)
  return (
    <>
    <h2>Id is = {id}</h2>
    {/* http://localhost:3000/tuturial/post/random?first=john&last=gray */}
    <h2>{query.get('first')}</h2>
    <h2>{query.get('last')}</h2>
    </>
  )
}

export default Post
