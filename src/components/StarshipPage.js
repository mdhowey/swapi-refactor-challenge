import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import NavBar from './NavBar';

const StarshipPage = ({ URL }) => {
  const params = useParams();
  const shipId = `${params.shipId}/`;

  const [ship, setShip] = useState({});

  useEffect(() => {
    fetch(URL + shipId)
      .then(res => res.json())
      .then(data => setShip(data));
  }, []);

  return (
    <div className='page-wrapper'>
      <NavBar />
      <div className='card-wrapper'>
        <p className='card-label'>Name: </p>
        <h2 className='card-heading'>{ship?.name ? ship.name : <ClipLoader color={"#ffff00"} />}</h2>
        <p className='card-label'>Model: </p>
        <h3 className='card-subheading'>{ship?.model ? ship.model : <ClipLoader color={"#ffff00"} />}</h3>
        <p className='card-label'>Manufacturer: </p>
        <h4 className='card-detail'>{ship?.manufacturer ? ship.manufacturer : <ClipLoader color={"#ffff00"} />}</h4>
      </div>
      <Link to={"/starships"}>Starships</Link>
    </div>
  )
}

export default StarshipPage