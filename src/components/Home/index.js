import LogoTitle from '../../assets/images/logo-L.png';
import { Link } from 'react-router-dom';
import './index.scss';


const Home = () => {
    return (
        <div  className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm Le
                <img src={LogoTitle} alt="developer"/>Aristizabal
                <br/>
                Web Developer
                </h1>
                <h2>Frontend Developer / JavaScript / React Js</h2>
                <Link to="/contact" className="flat-buttom">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home