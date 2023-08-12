
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    is_login: false,
    profile : null,
    access_token : null,
    refresh_token : null
}

export const  profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        setProfile : (state,action) =>{
            state.is_login = true;
            state.profile = action.payload.profile, // save profile user from login
            state.access_token = action.payload.access_token
        },
        logOut:(state) => {
            state.is_login = false;
            state.profile = null;
            state.refresh_token = null
        },
        setAssccesToken: () => { }
    }
})

export const {
    setProfile,
    logOut,
} = profileSlice.actions

export default profileSlice.reducer