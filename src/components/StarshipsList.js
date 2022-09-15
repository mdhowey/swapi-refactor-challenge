import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import NavBar from './NavBar';

const StarshipsList = ({ URL }) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setStarships(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getStarships();
  }, []);

  const starshipsUrls = starships.map((ship, index) => {
    const id = ship.url.slice(-2);
    return <Link to={`/starships/${id}`} key={index}>{ship.name}</Link>;
  });

  return (
    <div className='page-wrapper'>
      <NavBar />
      <h1>Starships</h1>
      <div className='list-wrapper'>
        {starshipsUrls.length ? starshipsUrls : <ClipLoader color={"#fff"} />}
      </div>
    </div>
  )
}

export default StarshipsList