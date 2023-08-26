import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoL from '../../assets/images/logo-L.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (

    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoL} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="LeoAristizabal"/>
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname="active" to = "/">
                <FontAwesomeIcon icon= {faHome} color ="#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="about-link" to = "/">
                <FontAwesomeIcon icon= {faUser} color ="#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="contact-link" to = "/">
                <FontAwesomeIcon icon= {faEnvelope} color ="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/leoaristizabal' >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar