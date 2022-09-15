import { Link } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/people">People</Link>
    </nav>
  )
}

export default NavBar