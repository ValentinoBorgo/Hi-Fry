import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers : [],
    modificarAbierto : false
}

export const rootReducer = createSlice({
    name : 'burgers',
    initialState,
    reducers : {
        getBurga : (state, action) =>{
            state.allBurgers = action.payload;
        },

        modalModificar : (state, action) =>{
            state.modificarAbierto = action.payload;
        }
    }
})



export const { getBurga, modalModificar } = rootReducer.actions

export default rootReducer.reducer