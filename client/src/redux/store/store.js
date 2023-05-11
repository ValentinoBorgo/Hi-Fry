import {configureStore} from '@reduxjs/toolkit';
import burgerReducer from '../reducer/reducer'

// Me permite dividir el estado de multiples archivos
export const store = configureStore({
    reducer : {
        burgers : burgerReducer,
    }
})

