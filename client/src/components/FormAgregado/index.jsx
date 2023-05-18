import React, { useEffect, useMemo, useState } from "react";
import './formAgregar.css'
import { useDispatch, useSelector } from "react-redux";
import { getBurgaM, modalAgregar, agendarPedido } from "../../redux/reducer/reducer";
import { GetBurgersM } from "../../redux/actions";

export function AgregarHamburguesa({ burgersM }) {

    const dispatch = useDispatch();

    const estadoModal = useSelector(state => state.burgers.modalAgregar);

    const idM = useSelector(state => state.burgers.ids);

    const idNoModificado = useSelector(state => state.burgers.idNoModificado);

    const modificaciones = useSelector(state => state.burgers.modificaciones)

    const contModificaciones = useSelector(state => state.burgers.contModificaciones);

    const pedidos = useSelector(state => state.burgers.pedidos);

    const ids = useSelector(state => state.burgers.ids);

    let mostrarPedidos = document.getElementById('pedidos');

    let contadora = 0;

    const [estadoPedido, setEstadoPedido] = useState({
        idPedido: '',
        nombreCliente: '',
        comentarios: '',
        pedidos: []
    });


    if (idM != '' && idM == idNoModificado) {
        useEffect(() => {
            GetBurgersM(idM).then((value) => {
                dispatch(getBurgaM(value))
            })
        }, [idM])
    } else {
        useEffect(() => {
            GetBurgersM(idNoModificado).then((value) => {
                dispatch(getBurgaM(value))
            })
        }, [idNoModificado])
    }

    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalAgregar(!estadoModal))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        contadora++;
        burgersM.map((b) =>{
            if(b.id == idNoModificado){
                // setEstadoPedido({
                //     idPedido : b.id
                // })
                mostrarPedidos.innerHTML = estadoPedido;
            }
        })
        dispatch(modalAgregar(!estadoModal))
        console.log(estadoPedido);
    }


    function organizarExtras(idNoModificado) {
        if (contModificaciones == -1) {
            return (
                null
            )
        } else {
            if (modificaciones[contModificaciones].idM == idNoModificado || modificaciones[contModificaciones].idM == ids) {
                const clonarEstado = async () =>{
                    useMemo(() =>{
                        // RESOLVE : the state estatecomand is not responding for the acumulation of new tips
                        const estadoClonado = {...estadoPedido};
                        const nuevoTip = modificaciones[contModificaciones];
                        estadoClonado.pedidos.push({nuevoTip})
                        setEstadoPedido(estadoClonado)
                    },[idNoModificado, contModificaciones])
                }
                clonarEstado();
                return (
                    <>
                        <p>➕ extra carne x{modificaciones[contModificaciones].carnesM}</p>
                        <p>➕ extra chedar x{modificaciones[contModificaciones].chedarM}</p>
                        <p>➕ ingredientes/comentarios : {modificaciones[contModificaciones].ingredientesM}</p>
                    </>
                )
            } else {
                return (
                    null
                )
            }
        }
    }



    return (
        <form className="Agregar" onSubmit={(e) => handleSubmit(e)}>
            <button onClick={cancel}>X</button>
            <div>
                <h1>Deseas Agregar</h1>
            </div>
            <article>
                {
                    burgersM.map(b => (
                        <li key={b.id}>
                            <div className="div">
                                <img src={b.img} alt={b.id} className="img" />
                                <p>{b.burger}</p>
                                <p>$ {b.precio}</p>
                            </div>
                        </li>
                    ))
                }
                <div>
                    {
                        organizarExtras(idNoModificado)
                    }
                </div>
            </article>
            <button type="submit">Agregar</button>
        </form>
    )
}