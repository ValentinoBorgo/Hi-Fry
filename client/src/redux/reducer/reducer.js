import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers: [],
    burgaM: [],
    modificaciones: [],
    Comandas: [],
    pedidos: '',
    modificarAbierto: false,
    modalAgregar: false,
    modalAgendar: false,
    ids: '',
    idNoModificado: '',
    contModificaciones: -1,
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
        },

        agendarPedido: (state, action) => {
            state.pedidos = action.payload;
        },

        contarModificaciones: (state, action) => {
            state.contModificaciones += action.payload;
        },

        modalAgendar: (state, action) => {
            state.modalAgendar = action.payload
        },

        agregarComanda: (state, action) => {
            state.Comandas.push(action.payload);
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
    idNoModificado,
    agendarPedido,
    contarModificaciones,
    modalAgendar,
    agregarComanda } = rootReducer.actions

export default rootReducer.reducer