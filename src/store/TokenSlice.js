import { createSlice } from '@reduxjs/toolkit'

const token = "";

export const TokenSlice = createSlice ({
    name:"token",
    initialState:{
        token:token
    },
    reducers:{
        login: (state, action) => {
            state.token = action.payload
            // console.log(state.token)
        },
        logout: (state, action) => {
            state.token = token
            console.log(state.token)
        }
    }
})

export const {login, logout} = TokenSlice.actions;
export default TokenSlice.reducer;