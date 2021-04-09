import axios from 'axios';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario');
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, author, body};
    setLoading(true)
    
    setTimeout(() => {
    axios
    .post('http://localhost:8000/blogs', blog)
    .then(res => {
          console.log(res.data)
          history.push('/')
          // history.go(-1)
        })  
    .catch(err => console.error(err))
    setLoading(false)
    }, 500)

  }
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
        <label>Author</label>
        <select value={author} onChange={(e) => {setAuthor(e.target.value)}}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        <label>Body</label>
        <textarea required cols="30" rows="10" value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>
        { loading ? <button disabled>Adding Entry...</button> : <button>Add Entry</button>}
      </form>
    </div>
  )
}
