import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarIds, modalModificar } from "../../redux/reducer/reducer";

export function ActionBtn({props}){

    const dispatch = useDispatch();

    const stateModal = useSelector(state => state.burgers.modificarAbierto)

    const handleCustom = (e) =>{
        e.preventDefault();
        dispatch(modalModificar(!stateModal));
        dispatch(buscarIds(props[0])) 
    }

    const handleAdd = (e) =>{
        e.preventDefault();
        console.log(props[2]);
    }

    return(
        <div>
            <button onClick={e =>handleCustom(e)}>Modificar      
            </button>
            <button onClick={e => handleAdd(e)}>Agregar al Pedido</button>
        </div>
    )
}