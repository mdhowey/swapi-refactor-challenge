import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import NavBar from './NavBar'

const PlanetList = ({ URL }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPlanets(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getPlanets();
  }, []);

  const planetUrls = planets.map((planet, index) => {
    const id = planet.url.slice(-2);
    return <Link to={`/planets/${id}`} key={index}>{planet.name}</Link>;
  });

  return (
    <div className='page-wrapper'>
      <NavBar />
      <h1>Planets</h1>
      <div className='list-wrapper'>
        {planetUrls.length ? planetUrls : <ClipLoader color={"#fff"} />}
      </div>
    </div>
  )
}

export default PlanetList