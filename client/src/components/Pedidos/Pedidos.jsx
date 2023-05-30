import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Pedidos.css'
import { agregarComanda, designarComanda } from "../../redux/reducer/reducer";

export default function Pedidos() {


    const comandas = useSelector(state => state.burgers.Comandas);
    
    const dispatch = useDispatch();
    
    const [estadoComandas, setEstadoComandas] = useState(comandas);

    const handleCancel = (e, index) =>{
        e.preventDefault();
        const actualizacion = [...estadoComandas];
        for(let i = 0; i < actualizacion.length; i++){
            if(estadoComandas[i].nombre == index.nombre && estadoComandas[i].selección == index.selección && estadoComandas[i].total == index.total && estadoComandas[i].comandas == index.comandas){
                actualizacion.splice(i,1);
                dispatch(designarComanda(actualizacion));
                setEstadoComandas(actualizacion);
            }
        }
    }

    return (
        <>
        <article>
            {estadoComandas.length > 0 ? (
                estadoComandas?.map(c =>(
                    <div key={comandas[c]}>
                        <hr/>
                        <h2>{c.nombre}</h2>
                        <p>{c.selección}</p>
                        <div className="divPedi">
                            {c.comandas.map(lista =>( 
                                <li key={lista.llave}> 
                                    <p style={{fontWeight : "bold"}}>{lista.burger || lista.burgerM}</p>
                                    <p>Carnes : {lista.carnes || "Extra " + lista.carnesM}</p>
                                    <p>Chedar : {lista.chedar || "Extra " +lista.chedarM}</p>
                                    <p>Comentarios / Ingredientes : {lista.ingredientes || "Extra " +lista.ingredientesM}</p>
                                </li>
                            ))}
                        </div>
                        <strong>Precio Total : $💰 {c.total}</strong>
                        <br />
                        <button style={{color : 'red'}} onClick={(e) => handleCancel(e, c)}>X</button>
                    </div>
                ))) : (<p>Error</p>)
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