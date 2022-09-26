import { useSelector } from 'react-redux'
import { getBusinessNumber, getCell, getFax, getMobil, getphone } from '../Selectors/userSelectors'

const ContactInfo = () => {

    const userPhone = useSelector(getphone)
    const userCell = useSelector(getCell)
    const userMobil = useSelector(getMobil)
    const userBusinessNumber = useSelector(getBusinessNumber)
    const userFax = useSelector(getFax)

    return (
        <>
            <h3>Telefon/Fax</h3>
            <div className="details">
                <p><span>Telefon Privat</span>{userPhone}</p>
                <p><span>Telefon Geschäftlich</span>{userCell}</p>
                <p><span>Mobil</span>{userMobil}</p>
                <p><span>Geschäftlich</span>{userBusinessNumber}</p>
                <p><span>Fax</span>{userFax}</p>
            </div>
        </>
    )
}

export default ContactInfo