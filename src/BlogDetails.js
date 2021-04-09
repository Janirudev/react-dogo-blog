import axios from "axios"
import { useParams, useHistory } from "react-router"
import useFetch from './useFetch'

export default function BlogDetails() {
  const {id} = useParams()
  const { data: blog, loading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
  const history = useHistory()

  const handleClick = () => {
    axios.delete(`http://localhost:8000/blogs/${blog.id}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
    history.push('/')
  }

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && 
      <article>
        <h2>{blog.title}</h2>
        <p>Written by: {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
      }
    </div>
  )
}
