import React, { useEffect, useMemo, useState } from "react";
import './formAgregar.css'
import { useDispatch, useSelector } from "react-redux";
import { getBurgaM, modalAgregar, modalAgendar, agendarPedido } from "../../redux/reducer/reducer";
import { GetBurgersM } from "../../redux/actions";

export function AgregarHamburguesa({ burgersM }) {

    const dispatch = useDispatch();

    const estadoModal = useSelector(state => state.burgers.modalAgregar);

    const idM = useSelector(state => state.burgers.ids);

    const idNoModificado = useSelector(state => state.burgers.idNoModificado);

    const modificaciones = useSelector(state => state.burgers.modificaciones)

    const contModificaciones = useSelector(state => state.burgers.contModificaciones);

    const pedidos = useSelector(state => state.burgers.pedidos)


    const [ListaPedido, setListaPedido] = useState(pedidos);



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
        dispatch(modalAgregar(!estadoModal))
        dispatch(agendarPedido([...ListaPedido]))
        console.log(ListaPedido);
    }

    function modificarLista(){
        useMemo(() =>{
            GetBurgersM(idM).then((value) => {
                const {id, burger, chedar, carnes, ingredientes} = value[0];
                const nuevo = {id, burger, carnes, chedar, ingredientes};
                const estado = [...ListaPedido];
                estado.push(nuevo)
                setListaPedido(estado)
            })
        },[])
        return (
            null
        )
    }

    function organizarExtras(idNoModificado) {
        // one condition more for entry to the estructure.
        if (contModificaciones == -1) {
            modificarLista();
        } else {
            if (modificaciones[contModificaciones].idM == idNoModificado) {
                useMemo(() => {
                    // bug repeat the nuevo tips.
                    const estadoMod = [...ListaPedido];
                    const nuevoTip = modificaciones;
                    let obj;
                    for(let i = 0; i < nuevoTip.length; i++){
                        obj = nuevoTip[i];
                    }
                    estadoMod.push(obj)
                    setListaPedido(estadoMod)
                }, [contModificaciones])
                // idNoModificado = '';
                // Fix bug, when the form is closed, the information persists and my idea is,
                // that info deleted.
                return (
                    <>
                        <p>➕ extra carne x{modificaciones[contModificaciones].carnesM}</p>
                        <p>➕ extra chedar x{modificaciones[contModificaciones].chedarM}</p>
                        <p>➕ ingredientes/comentarios : {modificaciones[contModificaciones].ingredientesM}</p>
                    </>
                )
            }else {
                console.log("No entras");
                modificarLista();
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