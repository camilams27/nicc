import React from 'react';
import './App.css';
import { Outlet, Link, useLocation} from 'react-router-dom';

function App() {
  const currentLocation = useLocation();
  const getClassName = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };
  console.log(getClassName('/works'))

  return (
    <div>
      <nav className="menu d-flex justify-content-around align-items-center pt-2">
          <h1 className='logo'>
            <span className='nicName' id='nicName'>
              <Link to="/" 
                className={getClassName('/')} 
                 >
                Nicco
              </Link>
            </span>
          </h1>
          <ul className='d-flex'>
            <li>
              <Link to="/works" 
                className={getClassName('/works')}
                 >
                  Works
              </Link>
            </li>
            <li className='px-3'>
              <Link to="/about" 
                className={getClassName('/about')}
                 >
                  About
              </Link>
            </li>
            <li>
              <Link to="/contact" 
                className={getClassName('/contact')}
                 >
                  Contact
              </Link>
            </li>
          </ul>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App
