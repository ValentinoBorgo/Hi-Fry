import React from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pedidos'>
                            Pedidos
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/hamburguesas'>
                        Hamburguesas
                    </NavLink>
                    </li>
                    <li>Stock</li>
                    <li>Facturacion</li>
                    <li>Configuracion</li>
                </ul>
            </nav>
        </div>
    )
}