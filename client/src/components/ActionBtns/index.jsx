import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalModificar } from "../../redux/reducer/reducer";

export function ActionBtn(){

    const dispatch = useDispatch();

    const stateModal = useSelector(state => state.burgers.modificarAbierto)

    const handleCustom = (e) =>{
        e.preventDefault();
        dispatch(modalModificar(!stateModal));
    }

    return(
        <div>
            <button onClick={e =>handleCustom(e)}>Modificar</button>
            <button>Agregar al Pedido</button>
        </div>
    )
}