import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Pedidos() {


    const comandas = useSelector(state => state.burgers.Comandas);

    console.log(comandas);

    return (
        <>
        <article>
            {
                comandas.map(c =>(
                    <div key={comandas[c]}>
                        <h2>{c.nombre}</h2>
                        <p>{c.selección}</p>
                        <div>
                            {c.comandas.map(lista =>(
                                <li key={lista.llave}>
                                    <p>{lista.burger || lista.burgerM}</p>
                                    <p>{lista.carnes || lista.carnesM}</p>
                                    <p>{lista.chedar || lista.chedarM}</p>
                                    <p>{lista.ingredientes || lista.ingredientesM}</p>
                                </li>
                            ))}
                        </div>
                        <strong>Precio Total : $💰 {c.total}</strong>
                        <br />
                        <button style={{color : 'red'}}>X</button>
                    </div>
                ))
            }
        </article>
        <br />
        <hr />
        <button>
            <NavLink to='/hamburguesas'>
                Realizar Pedido
            </NavLink>
         </button>
        </>
    )
}