import React, { useEffect, useState } from "react";


export function MostrarBurger({datos}) {
    
    const [state, setState] = useState([]);

    async function resolvPromise() {
        try {
            const data = await datos;
            setState(data);
        } catch (e) {
            console.log(e);
        }
    }

    resolvPromise();


    return (
        <ul>
            {!state ? <h1>Cargando...</h1> :
                state.map(burga => (
                    <li key={burga.id}>
                        <p>------------------------------------------</p>
                        <h3>🍟 + {burga.burger}</h3>
                        <p>$ {burga.price}</p>
                        <div>
                            <img src={burga.img} alt={burga.id} />
                        </div>
                        <strong>Carnes : {burga.carnes}</strong><br/>
                        <strong>Chedar : {burga.chedar}</strong><br/>
                        <strong>Ingredientes : {burga.ingredientes}</strong><br/>
                        <div>
                        <button>Agregar</button>
                        <button>Modificar</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

