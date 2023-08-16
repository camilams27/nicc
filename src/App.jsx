import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <nav className="menu d-flex justify-content-around align-items-center pt-2">
          <h1 className='logo'>
            <span className='nicName glowing-text'>
              <Link to="/" className='link'>Nicco</Link>
            </span>
          </h1>
          <ul className='d-flex'>
            <li>
              <Link to="/works" className='link'>Works</Link>
            </li>
            <li className='px-3'>
              <Link to="/about" className='link'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='link'>Contact</Link>
            </li>
          </ul>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App
