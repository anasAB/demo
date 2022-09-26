import { useSelector } from 'react-redux'
import { getEmail, getWebSite } from '../Selectors/userSelectors'


const InternetInfo = () => {

    const userWebSite = useSelector(getWebSite)
    const userEmail = useSelector(getEmail)

    return (
        <>
            <h2>Internet</h2>
            <div className="details">
                <p><span>Eamil</span>{userEmail}</p>
                <p><span>WebSite</span>{userWebSite}</p>
            </div>
        </>
    )

}

export default InternetInfo