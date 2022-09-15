import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from './NavBar'

const PersonPage = ({ URL }) => {
  const params = useParams();
  const personId = `${params.personId}/`;

  const [person, setPerson] = useState({});

  const getPerson = async () => {
    try {
      const res = await fetch(URL + personId);
      const data = await res.json();
      setPerson(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className='page-wrapper'>
      <NavBar />
      <div className='card-wrapper'>
        <p className='card-label'>Name: </p>
        <h2 className='card-heading'>{person?.name ? person.name : <ClipLoader color={"#ffff00"} />}</h2>
        <p className='card-label'>Height: </p>
        <h3 className='card-subheading'>{person?.height ? `${person.height} cm` : <ClipLoader color={"#ffff00"} />}</h3>
        <p className='card-label'>Mass: </p>
        <h4 className='card-detail'>{person?.mass ? `${person.mass} kg` : <ClipLoader color={"#ffff00"} />}</h4>
      </div>
      <Link to={"/people"}>People</Link>
    </div>
  )
}

export default PersonPage