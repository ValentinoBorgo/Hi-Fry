import { GET_BURGERS } from "../actions/index";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allBurgers : [],
}

export const rootReducer = createSlice({
    name : 'burgers',
    initialState,
    reducers : {
        getBurga : (state, action) =>{
            state.allBurgers = action.payload;
        }
    }
})



export const { getBurga } = rootReducer.actions

export default rootReducer.reducer