import NavBar from './NavBar';
import './Page404.css';

const Page404 = () => {
  return (
    <div className='page-wrapper'>
      <NavBar />
      <h1>404</h1>
      <h2>Woops!</h2>
      <p>Something went wrong...</p>
      <small>We're not sure what you did</small>
    </div>
  )
}

export default Page404