import { useSelector } from 'react-redux'
import { getCity, getCountry, getPlz, getStreetName } from '../Selectors/userSelectors'
import '../css/style.css'


const AddressInfo = () => {

    const userPlz = useSelector(getPlz)
    const userStreetName = useSelector(getStreetName)
    const userCity = useSelector(getCity)
    const userCountry = useSelector(getCountry)

    return (
        <>
            <h3>Adresse</h3>
            <div className="details">
                <p><span>Strasse</span>{userStreetName}</p>
                <p><span>PLZ</span>{userPlz}</p>
                <p><span>Land</span>{userCountry}</p>
                <p><span>Ort</span>{userCity}</p>
            </div>
        </>
    )
}

export default AddressInfo