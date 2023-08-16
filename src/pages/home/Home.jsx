import './home.css';
import banner from '../../assets/img/banner.png';
import Menu from '../../components/menu/Menu';
import Line from '../../components/line/Line';

function Home() {

    return (
        <>
            <div className="homeContainer mt-5 d-flex justify-content-evenly align-items-center pt-1">
                <img 
                    src={banner} 
                    alt="banner"
                />
                <h1 className='title'>
                    <span>DESIGNER 3D</span>
                </h1>
            </div>
            <Line />
        </>
    );
}

export default Home;