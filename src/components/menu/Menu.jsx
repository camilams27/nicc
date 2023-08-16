import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu () {

    return (
        <>
            <nav className="menu d-flex justify-content-around align-items-center pt-2">
                <h1 className='logo'>
                    <span className='nicName glowing-text'>
                        Nicco
                    </span>
                </h1>
                <ul className='d-flex'>
                    <li>Works</li>
                    <li className='px-3'>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;