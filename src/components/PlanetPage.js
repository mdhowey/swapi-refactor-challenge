import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import NavBar from './NavBar'

const PlanetPage = ({ URL }) => {
  const params = useParams();
  const planetId = `${params.planetId}/`;

  const [planet, setPlanet] = useState();

  const getShip = async () => {
    try {
      const res = await fetch(URL + planetId);
      const data = await res.json();
      setPlanet(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getShip();
  }, []);

  return (
    <div className='page-wrapper'>
      <NavBar />
      <div className='card-wrapper'>
        <p className='card-label'>Name: </p>
        <h2 className='card-heading'>{planet?.name ? planet.name : <ClipLoader color={"#ffff00"} />}</h2>
        <p className='card-label'>Population: </p>
        <h3 className='card-subheading'>{planet?.population ? planet.population : <ClipLoader color={"#ffff00"} />}</h3>
        <p className='card-label'>Climate: </p>
        <h4 className='card-detail'>{planet?.climate ? planet.climate : <ClipLoader color={"#ffff00"} />}</h4>
      </div>
      <Link to={"/planets"}>Planets</Link>
    </div>
  )
}

export default PlanetPage