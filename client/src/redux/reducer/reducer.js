import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers : [],
    modificarAbierto : false,
    modificaciones : [],
    ids : ''
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
        },

        buscarIds : (state, action) =>{
            state.ids = action.payload;
        }
    }
})



export const { getBurga, modalModificar, realizarModificaciones, buscarIds } = rootReducer.actions

export default rootReducer.reducer