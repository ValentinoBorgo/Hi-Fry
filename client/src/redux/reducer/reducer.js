import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers: [],
    burgaM: [],
    modificarAbierto: false,
    modalAgregar: false,
    modificaciones: [],
    ids: '',
    idNoModificado: ''
}

export const rootReducer = createSlice({
    name: 'burgers',
    initialState,
    reducers: {
        getBurga: (state, action) => {
            state.allBurgers = action.payload;
        },

        getBurgaM: (state, action) => {
            state.burgaM = action.payload;
        },

        modalModificar: (state, action) => {
            state.modificarAbierto = action.payload;
        },

        realizarModificaciones: (state, action) => {
            state.modificaciones.push((action.payload));
        },

        buscarIds: (state, action) => {
            state.ids = action.payload;
        },

        modalAgregar: (state, action) => {
            state.modalAgregar = action.payload;
        },

        idNoModificado: (state, action) => {
            state.idNoModificado = action.payload;
        }
    }
})



export const {
    getBurga,
    getBurgaM,
    modalModificar,
    realizarModificaciones,
    buscarIds,
    modalAgregar,
    idNoModificado } = rootReducer.actions

export default rootReducer.reducer