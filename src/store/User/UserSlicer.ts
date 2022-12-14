import { createSlice } from '@reduxjs/toolkit'
import { IResult, IUser, Users } from '../../IState'
import { initialUserState } from './initialUserState';


export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUserState: (state: Users, action: { payload: IResult }) => {
            const { payload } = action

            state.push({
                firstName: payload.name.first,
                lastName: payload.name.last,
                email: payload.email,
                city: payload.location.city,
                streetName: payload.location.street.name,
                streetNum: payload.location.street.number,
                plz: payload.location.postcode,
                img: payload.picture.large,
                title: payload.name.title,
                birthdate: payload.dob.date,
                registeredDate: payload.registered.date,
                country: payload.location.country,
                phone: payload.phone,
                cell: payload.cell,
                Mobil: payload.Mobil,
                businessNumber: payload.businessNumber,
                fax: payload.fax,
                WebSite: payload.WebSite
            })
        },

        editUserInfo: (state: any, action) => {
            console.log('### Edit User Info ACTION');
            const payLoad: { [index: string]: IUser } = action.payload
            let key: any;
            for (key in payLoad) {
                state[0][key] = payLoad[key]
            }
        },
    },
})

export const { setUserState, editUserInfo } = userSlice.actions

export default userSlice.reducer

