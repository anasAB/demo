import { IUser } from "../IState"

interface IState {
    users: IUser[]
}


//! MainInfo 
export const getFirstName = (state: IState): string => state.users[0]?.firstName ? state.users[0]?.firstName : ''
export const getUserImg = (state: IState): string => state.users[0]?.img ? state.users[0].img : ''
export const getUserTitle = (state: IState): string => state.users[0]?.title ? state.users[0]?.title : ''
export const getUserBirthdate = (state: IState): string => state.users[0]?.birthdate ? state.users[0]?.birthdate : ''
export const getUserRegisteredDate = (state: IState): string => state.users[0]?.registeredDate ? state.users[0]?.registeredDate : ''

//! AddressInfo
export const getPlz = (state: IState): number => state.users[0]?.plz ? state.users[0].plz : 0
export const getStreetName = (state: IState): string => state.users[0]?.streetName ? state.users[0].streetName : ''
export const getCity = (state: IState): string => state.users[0]?.city ? state.users[0].city: ''
export const getCountry = (state: IState): string => state.users[0]?.country ? state.users[0].country: ''

//! ContactInfo
export const getphone = (state: IState): string => state.users[0]?.phone ? state.users[0].phone: ''
export const getCell = (state: IState): string => state.users[0]?.cell ? state.users[0].cell: ''
export const getMobil = (state: IState): string => state.users[0]?.Mobil ? state.users[0].Mobil: '123456789'
export const getBusinessNumber= (state: IState): string => state.users[0]?.businessNumber ? state.users[0].businessNumber: '+40159354'
export const getFax= (state: IState): string => state.users[0]?.fax ? state.users[0].fax: '00015486'

//! InterentInfo
export const getStreetNo = (state: IState): number => state.users[0]?.streetNum ? state.users[0].streetNum : 0
export const getLastName = (state: IState): string => state.users[0]?.lastName ? state.users[0]?.lastName : ''
export const getEmail = (state: IState): string => state.users[0]?.email ? state.users[0]?.email: ''
export const getWebSite = (state: IState): string => state.users[0]?.WebSite ? state.users[0]?.WebSite: 'daisser.com'

export const getState = (state: any): any => state
