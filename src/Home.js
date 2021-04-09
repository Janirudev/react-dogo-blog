import useFetch from './useFetch'
import BlogList from './BlogList'

export default function Home() {
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
      {error && <div>{error}</div>}
    </div>
  )
}
