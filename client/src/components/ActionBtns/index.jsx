import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function ActionBtn(){

    const handleCustom = (e) =>{
        alert("Hey !!!");
    }

    return(
        <div>
            <button onClick={handleCustom}>Modificar</button>
            <button>Agregar al Pedido</button>
        </div>
    )
}