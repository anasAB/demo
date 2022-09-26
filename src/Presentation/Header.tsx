import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logImg from '../img/logo.png'
import {
    faAddressBook, faHouseUser, faUserGroup, faUserPlus, faEuroSign, faServer, faGear
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div id="header">
            <div id="logo"><img src={logImg} alt='log' /></div>
            <div id="navigation-header">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faHouseUser} /></a> Home</li>
                    <li className="selected"><a href="#"><FontAwesomeIcon icon={faAddressBook} /></a>Kontakte</li>
                    <li><a href="#"><FontAwesomeIcon icon={faUserGroup} /></a>Gruppen</li>
                    <li><a href="#"><FontAwesomeIcon icon={faUserPlus} /></a>Aufnahme Assistent</li>
                    <li><a href="#"><FontAwesomeIcon icon={faEuroSign} /></a>Rechnungen</li>
                    <li><a href="#"><FontAwesomeIcon icon={faServer} /></a>Stammdaten</li>
                    <li><a href="#"><FontAwesomeIcon icon={faGear} /></a>Konfiguration</li>
                </ul>
            </div>
            <div id="search"><input type="text" placeholder="Suchen" /></div>
            <div id="quicklinks">
                <ul>
                    <li><a href="#"><span className="placeholder-icon"></span></a></li>
                    <li><a href="#"><span className="placeholder-icon"></span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header