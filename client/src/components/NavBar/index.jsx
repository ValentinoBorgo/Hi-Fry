import React from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
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
                    <li>
                        <NavLink to='/configuración'>
                            Configuración
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}