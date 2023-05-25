import { modalAgendar, agendarPedido, agregarComanda, contarModificaciones } from "../../redux/reducer/reducer";
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

    
    const [dat, setDat] = useState({
        nombre : '',
        selección : '',
        total : '',
        comandas : []
    });
    
    let suma = 0;
    const [sumaTotal, setSumaTotal] = useState(suma);
    let  name = dat.nombre;
    const [selección, setSeleccion] = useState(dat.selección);
    const [comanda, setComanda] = useState(dat.comandas);

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

    //This function changue the var suma to 0 when the table is empty.
    const handleTable = (e) => {
        e.preventDefault();
        let tabla = document.getElementById('tabla');
        if (tabla.childElementCount == 1) {
            suma = 0;
        }
        setSumaTotal(suma);
    }

    //Handle event of the input for the name.
    const handleName = (e) =>{
        e.preventDefault();
        dat.nombre = e.target.value;
    }


    //Return the value of the select with the option selected.
    const handleSelect = (e) =>{
        e.preventDefault();
        setSeleccion(e.target.value);
        dat.selección = e.target.value;
    }
    

    //Sends the form convert into state to managment in the app.
    const handleSubmit = (e) =>{
        e.preventDefault();
        dat.total = sumaTotal;
        dispatch(agendarPedido([...estadoPedido]));
        setComanda(dat.comandas =  estadoPedido);
        setDat({
            nombre : name,
            selección : selección,
            total : sumaTotal,
            comandas : comanda
        });
        dispatch(agregarComanda(dat));
        dispatch(modalAgendar(!modalAgendar));
        dispatch(agendarPedido([]))
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
        <form action="" className="Agendar" onSubmit={handleSubmit}>
            <button onClick={e => cancel(e)}>X</button>
            <div>
                <label>Nombre / Apellido : </label>
                <input type="text" required onChange={(e) =>handleName(e)}/>
            </div>
            <div>
                <label>Retiro / Consumir en local : </label>
                <select name="opciones" required onChange={(e) =>handleSelect(e)}>
                    <option>Opciones</option>
                    <option value="Retiro Local">Retiro por local</option>
                    <option value="Delivery">Delivery</option>
                    <option value="FastFood">Comer en el local</option>
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
            <button type="submit">Enviar a cola</button>
        </form>
    )
}