import React from "react";
import { NavLink } from "react-router-dom";

export default function Pedidos() {
    return (
        <>
            <button>
                <NavLink to='/hamburguesas'>
                    Realizar Pedido
                </NavLink>
            </button>
        </>
    )
}