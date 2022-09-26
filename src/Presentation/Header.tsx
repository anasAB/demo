import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logImg from '../img/logo.png'
import {
    faCoffee,
    faHouseUser
  } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div id="header">
            <div id="logo"><img src={logImg} alt='log'/></div>
            <div id="navigation-header">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faHouseUser} color="greay" size="2x" />Home</a></li>
                    <li className="selected"><a href="#"><span className="placeholder-icon"></span>Kontakte</a></li>
                    <li><a href="#"><span className="placeholder-icon"></span>Gruppen</a></li>
                    <li><a href="#"><span className="placeholder-icon"></span>Aufnahme Assistent</a></li>
                    <li><a href="#"><span className="placeholder-icon"></span>Rechnungen</a></li>
                    <li><a href="#"><span className="placeholder-icon"></span>Stammdaten</a></li>
                    <li><a href="#"><span className="placeholder-icon"></span>Konfiguration</a></li>
                </ul>
            </div>
            <div id="search"><input type="text" placeholder="Suchen"/></div>
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