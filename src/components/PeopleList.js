import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import NavBar from "./NavBar"

const PeopleList = ({ URL }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPeople(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getPeople();
  }, []);

  const peopleUrls = people.map((person, index) => {
    const id = person.url.slice(-2);
    return <Link to={`/people/${id}`} key={index}>{person.name}</Link>;
  });
  
  return (
    <div className='page-wrapper'>
      <NavBar />
      <h1>People</h1>
      <div className='list-wrapper'>
        {peopleUrls.length ? peopleUrls : <ClipLoader color={"#fff"} />}
      </div>
    </div>
  )
}

export default PeopleList