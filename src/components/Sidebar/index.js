import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../Assets/Images/logo-s.png'
import LogoSubtitle from '../../Assets/Images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ()=>{
    return(
    <div>
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logo" />
            </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        </div>
        <ul>
            {/* <li>
                <a  rel='noreffer' href='https://www.linkedin.com/in/ridhiman/'>
                   <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a  rel='noreffer' href='https://github.com/Ridhiman27'>
                   <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li> */}
        </ul>
    </div>
    );
}

export default Sidebar;