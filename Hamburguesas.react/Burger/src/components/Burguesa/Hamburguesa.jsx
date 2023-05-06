import React, { useEffect, useState } from "react";

export  function MostrarBurger(){

    const [state, setState] = useState([]);

    async function fetchBurga(){
        const response = await fetch('http://localhost:3001/api/hamburguesas');
        const data = await response.json();
        setState(data);
    }
    
    useEffect(() =>{
        fetchBurga();
    },[])
    
    console.log(state);

    return (
        <ul>
            { !state ? <h1>Cargando...</h1> : 
                state.map( burga=>(
                    <li key={burga.id}>
                        <p>------------------------------------------</p>
                        <h3>🍔{burga.burger}</h3>
                        <p>$ {burga.price}</p>
                        <img src={burga.img} alt={burga.id} />
                    </li>
                ))
            }
        </ul>
    )
}