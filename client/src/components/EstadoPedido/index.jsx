import { modalAgendar, agendarPedido } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import './formAgendar.css'
import { useMemo, useState } from "react";
import { GetBurgers } from "../../redux/actions"
import { v4 as uuidv4 } from 'uuid';

export function EstadoPedido() {

    const modalAbierto = useSelector(state => state.burgers.modalAgendar);

    const pedido = useSelector(state => state.burgers.pedidos)

    const dispatch = useDispatch();


    const open = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAbierto))
    }

    return (
        <div>
            <h1>✔️ {pedido.length}</h1>
            <h2>Estado de pedido</h2>
            <div>
            </div>
            <p id="pedidos"></p>
            {
                pedido.length > 0 ? (
                    <button style={{ border: '3px solid red' }} onClick={e => open(e)}>Agendar Pedido</button>
                ) : (<button style={{ pointerEvents: "none", opacity: 0.5 }} onClick={e => open(e)}>Agendar Pedido</button>)}
        </div>
    )
}

export function FormAgendar() {

    const dispatch = useDispatch();

    const pedido = useSelector(state => state.burgers.pedidos)

    const [estadoPedido, setEstadoPedido] = useState(pedido)

    let suma = 0;

    const [sumaTotal, setSumaTotal] = useState(suma);

    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAgendar));
        dispatch(agendarPedido([...estadoPedido]));
    }

    //Method for deleting items.
    const handleDelete = (e, llave) => {
        e.preventDefault();
        const actualizacion = [...estadoPedido];
        for (let i = 0; i < estadoPedido.length; i++) {
            if (estadoPedido[i].llave == llave) {
                actualizacion.splice(i, 1); // Eliminar el elemento en la posición i
                setEstadoPedido(actualizacion);
            }
        }
        dispatch(agendarPedido([...estadoPedido]))
    }

    const handleTable = (e) => {
        e.preventDefault();
        let tabla = document.getElementById('tabla');
        if (tabla.childElementCount == 1) {
            suma = 0;
        }
        setSumaTotal(suma);
    }

    //Function that resolve the sum of the list of pedidos.
    function calcularPrecioTotal() {
        useMemo(() => {
            GetBurgers().then(burga => {
                for (let i = 0; i < estadoPedido.length; i++) {

                    if (estadoPedido[i].hasOwnProperty('id')) {
                        suma = suma + burga[estadoPedido[i].id - 1].precio;
                    }

                    if (estadoPedido[i].hasOwnProperty('idM')) {
                        suma = suma + burga[estadoPedido[i].idM - 1].precio;
                    }

                    setSumaTotal(suma);
                }
            })
        }, [estadoPedido]);
        return (
            <>
                <label>Total : 💰 {sumaTotal}</label>
            </>
        )
    }

    return (
        <form action="" className="Agendar">
            <button onClick={e => cancel(e)}>X</button>
            <div>
                <label>Nombre / Apellido : </label>
                <input type="text" required/>
            </div>
            <div>
                <label>Retiro / Consumir en local : </label>
                <select required>
                    <option value="">Opciones</option>
                    <option value="">Retiro por local</option>
                    <option value="">Delivery</option>
                    <option value="">Comer en el local</option>
                </select>
            </div>
            <div>
                <label>Lista Pedido : </label>
                <table className="Tabla" id="tabla" onClick={(e) =>handleTable(e)}>
                    <thead>
                        <tr>
                            <th>Hamburguesa</th>
                            <th>Carnes</th>
                            <th>Chedar</th>
                            <th>Comentarios</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    {
                        estadoPedido?.map(p => (
                            <tbody key={p.llave}>
                                <tr className="listaPedi" key={p.llave}>
                                    <th>{p.burgerM || p.burger} </th>
                                    <th>{p.carnesM || "D " + p.carnes} </th>
                                    <th>{p.chedarM || "D " + p.chedar} </th>
                                    <th>{p.ingredientesM || "D " + p.ingredientes}</th>
                                    <th><button style={{ color: 'red' }} onClick={(e) => handleDelete(e, p.llave)}>X</button></th>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div>
                {calcularPrecioTotal()}
            </div>
            <button>Enviar a cola</button>
        </form>
    )
}