import { Link } from "react-router-dom"

function navBar() {
  return (
<nav className="navbar">
      <h2>Kum Library</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  )
}

export default navBar