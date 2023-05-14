import React from "react";
import { ActionBtn } from "../ActionBtns";

export function DestrucBurguesa({ id, burger, img, precio, carnes, chedar, ingredientes }) {


    return (
        <div>
            <p>------------------------------------------</p>
            <h3>🍟 + {burger}</h3>
            <p>$ {precio}</p>
            <div>
                <img src={img} alt={id} />
            </div>
            <div>
                <strong>Carnes : {carnes}</strong><br />
                <strong>Chedar : {chedar}</strong><br />
                <strong>Ingredientes : {ingredientes}</strong><br />
            </div>
            <ActionBtn />
        </div>
    )
}