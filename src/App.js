import './App.css';
import Home from './components/Home';
import StarshipsList from './components/StarshipsList';
import StarshipPage from './components/StarshipPage';
import PlanetList from './components/PlanetList';
import PlanetPage from './components/PlanetPage';
import PeopleList from './components/PeopleList';
import PersonPage from './components/PersonPage';
import Page404 from './components/Page404';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const URL = 'https://swapi.dev/api/';
  return (
    <div>
      <Routes>
        <Route path='/' index element={<Home URL={`${URL}`} />} />
        <Route path='/starships' element={<StarshipsList URL={`${URL}starships`} />} />
        <Route path='/starships/:shipId' element={<StarshipPage URL={`${URL}starships/`} />} />
        <Route path='/planets' element={<PlanetList URL={`${URL}planets`} />} />
        <Route path='/planets/:planetId' element={<PlanetPage URL={`${URL}planets/`} />} />
        <Route path='/people' element={<PeopleList URL={`${URL}people`} />} />
        <Route path='/people/:personId' element={<PersonPage URL={`${URL}people/`} />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;