import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetBurgers } from "../../redux/actions/index";
import { DestrucBurguesa } from "../DestrucBurguesa/DestrucBurguesa";
import { getBurga } from '../../redux/reducer/reducer'

export const Burger = ({ Burgers }) => {

    const dispatch = useDispatch();
    const [carga, setCarga] = useState(true);


    React.useEffect(() => {
        GetBurgers().then(burga => {
            dispatch(getBurga(burga))
        })
        setTimeout(() => {
            setCarga(false);    
        }, 500)
    }, [dispatch]);

    if (carga) {
        return <p>Cargando</p>
    }

    return (
        <article style={{ display : "flex", flexWrap : "wrap", justifyContent : "space-around", padding : '6rem'}}>
            {Burgers?.map(h => {
                return (<DestrucBurguesa
                    id={h.id}
                    burger={h.burger}
                    precio={h.precio}
                    img={h.img}
                    carnes={h.carnes}
                    chedar={h.chedar}
                    ingredientes={h.ingredientes}
                    key={h.id} />)
            })}
        </article>
    )
}

