import React, { useEffect, useState } from "react";
import { ActionBtn } from "../ActionBtns";
import { useSelector } from "react-redux";


export function DestrucBurguesa({ id, burger, img, precio, carnes, chedar, ingredientes }) {

    let modificaciones = useSelector((state) => state.burgers.modificaciones);
    const [state, setState] = useState([id, carnes, chedar,ingredientes]);

    const cambiarBurga =  () =>{
        setState([
             modificaciones
        ])
    }

    useEffect(() =>{
        cambiarBurga();
    }, [modificaciones])


    return (
        <div>
            <p>------------------------------------------</p>
            <h3>🍟 + {burger}</h3>
            <p>💰 {precio}</p>
            <div>
                <img src={img} alt={id} />
            </div>
            <div>
                <strong>Carnes : {carnes}</strong><br />
                <strong>Chedar : {chedar}</strong><br />
                <strong>Ingredientes : {ingredientes}</strong><br />
            </div>
            <ActionBtn props = {[id,burger,precio,carnes,chedar,ingredientes,state]} />
        </div>
    )
}