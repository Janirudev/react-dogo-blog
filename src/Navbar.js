import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Dogo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Entry</Link>
      </div>
    </nav>
  ) 
}
