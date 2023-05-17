import React, { useEffect } from "react";
import './formAgregar.css'
import { useDispatch, useSelector } from "react-redux";
import { getBurgaM, modalAgregar } from "../../redux/reducer/reducer";
import { GetBurgersM } from "../../redux/actions";

export function AgregarHamburguesa({burgersM}) {

    const dispatch = useDispatch();

    const estadoModal = useSelector(state => state.burgers.modalAgregar);

    const idM = useSelector(state => state.burgers.ids);

    const idNoModificado = useSelector(state => state.burgers.idNoModificado);

    
    if(idM != '' && idM == idNoModificado){
        useEffect(() =>{
            GetBurgersM(idM).then((value)=>{
                dispatch(getBurgaM(value))
            })
        },[idM])
    }else{
        useEffect(() =>{
            GetBurgersM(idNoModificado).then((value)=>{
                dispatch(getBurgaM(value))
            })
        },[idNoModificado])
    }

    const cancel = (e) =>{
        e.preventDefault();
        dispatch(modalAgregar(!estadoModal))
    }



    return (
        <form className="Agregar">
            <button onClick={cancel}>X</button>
            <div>
                <h1>Deseas Agregar</h1>
            </div>
            <article>
                {
                    burgersM.map(b =>(
                            <li key={b.id}>
                                <div className="div">
                                    <img src={b.img} alt={b.id} className="img"/>
                                <p>{b.burger}</p>
                                <p>$ {b.precio}</p>
                                </div>
                            </li>
                    ))
                }
            </article>
            <button type="submit">Agregar</button>
        </form>
    )
}