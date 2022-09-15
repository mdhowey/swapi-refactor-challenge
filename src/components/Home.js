import NavBar from "./NavBar"
import './Home.css'

const Home = () => {
  return (
    <div className='page-wrapper homepage'>
      <NavBar />
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png' alt="star wars"/>
    </div>
  )
}

export default Home