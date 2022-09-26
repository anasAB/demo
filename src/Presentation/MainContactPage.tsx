import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getState } from '../Selectors/userSelectors'
import fetchData from '../utils/fetchData'
import LeftNavigation from './LeftNavigation'
import MainInfo from './MainInfo'
import AddressInfo from './AddressInfo'
import ContactInfo from './ContactInfo'
import InternetInfo from './InternetInfo'




const MainContactPage = () => {


    const wholeState = useSelector(getState)
    console.log('###wholeState', wholeState);

    useEffect(() => {
        fetchData()
            .catch(error => {
                console.warn(error.message)
            });
    }, [])


    return (
        <div id="wrapper">
            <LeftNavigation />
            <div id="content">
                <MainInfo />
                <div id="contact-wrapper">
                    <h2>KONTAKTDATEN</h2>
                    <div className="contact-block">
                        <AddressInfo />
                    </div>
                    <div className="contact-block">
                        <ContactInfo />
                    </div>
                    <div className="contact-block">
                        <InternetInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContactPage