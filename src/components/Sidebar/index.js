import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoL from '../../assets/images/logo-L.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (

    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoL} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="LeoAristizabal"/>
        </Link>
        <nav>

            <NavLink 
                exact= "true" 
                activeclassname="active" 
                to = "/"
            >
                <FontAwesomeIcon icon= {faHome} color ="#4d4d4e"/>
            </NavLink>
            
            <NavLink
             exact= "true" 
             activeclassname="active" 
             className="about-link" 
             to = "/about"
             >

                <FontAwesomeIcon icon= {faUser} color ="#4d4d4e"/>
            </NavLink>

            <NavLink 
            exact= "true" 
            activeclassname="active" 
            className="contact-link" 
            to = "/contact"
            >
            <FontAwesomeIcon icon= {faEnvelope} color ="#4d4d4e"/>
            </NavLink>

        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://github.com/leoaristizabal' 
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://instagram.com/leoaristizabal' 
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://github.com/leoaristizabal' 
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://wa.link/7piiy0' 
                >
                    <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e"/> 
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar