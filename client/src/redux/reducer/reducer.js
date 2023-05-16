import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers : [],
    modificarAbierto : false,
    modificaciones : []
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
        },

        realizarModificaciones : (state, action) =>{
            state.modificaciones.push((action.payload));
        }
    }
})



export const { getBurga, modalModificar, realizarModificaciones } = rootReducer.actions

export default rootReducer.reducer