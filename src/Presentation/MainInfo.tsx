import { useSelector } from 'react-redux'
import { getFirstName, getUserBirthdate, getUserImg, getUserRegisteredDate, getUserTitle } from '../Selectors/userSelectors'

const MainInfo = () => {

    const userTitle = useSelector(getUserTitle)
    const userImage = useSelector(getUserImg)
    const userFirstName = useSelector(getFirstName)
    const userRegisteredDate = useSelector(getUserRegisteredDate)

    //! userBirthdate year Month Day
    const userBirthdate = useSelector(getUserBirthdate)
    var month = new Date(userBirthdate).getUTCMonth() + 1;
    var day = new Date(userBirthdate).getUTCDate();
    var year = new Date(userBirthdate).getUTCFullYear();


    return (
        <div id="profile-overview">
            <figure>
                <img src={userImage} alt={userImage} />
            </figure>
            <div id="profile-content">
                <h1>{userFirstName}</h1>
                <p id="member-since">Mitglied seit {new Date(userRegisteredDate).getUTCFullYear()}</p>
                <div className="details">
                    <p><span>Titel</span>{userTitle}</p>
                    <p><span>Geschlecht</span>weiblich</p>
                    <p><span>Geburtstag</span>{day + '.' + month + '.' + year}</p>
                </div>
            </div>
            <div id="buttons">
                <a href="#" className="edit">@</a>
                <a href="#" className="delete">r</a>
            </div>
        </div>
    )
}

export default MainInfo