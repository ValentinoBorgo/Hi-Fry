import { modalAgendar } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import './formAgendar.css'

export function EstadoPedido() {

    const contModificaciones = useSelector(state => state.burgers.contModificaciones);

    const modalAbierto = useSelector(state => state.burgers.modalAgendar);

    const dispatch = useDispatch();


    const open = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAbierto))
        console.log("---------------------------------------------------");
    }

    return (
        <div>
            <h1>✔️ {contModificaciones + 1}</h1>
            <h2>Estado de pedido</h2>
            <div>
                {/* {pedido.map(p =>{
                    <h1>{p.}</h1>
                })} */}
            </div>
            <p id="pedidos"></p>
            <button style={{ border: '3px solid red' }} onClick={e => open(e)}>Agendar Pedido</button>
        </div>
    )
}

export function FormAgendar() {

    const dispatch = useDispatch();

    const pedido = useSelector(state => state.burgers.pedidos)

    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAgendar))
        console.log(pedido);
    }

    return (
        <form action="" className="Agendar">
            <button onClick={e => cancel(e)}>X</button>
            <div>
                <label>Nombre / Apellido : </label>
                <input type="text" />
            </div>
            <div>
                <label>Retiro / Consumir en local : </label>
                <select>
                    <option value="">Opciones</option>
                    <option value="">Retiro por local</option>
                    <option value="">Delivery</option>
                    <option value="">Comer en el local</option>
                </select>
            </div>
            <div>
                <label>Lista Pedidos : </label>
                <ul>
                {
                    pedido?.map(p =>(
                        <li key={p.idM || p.id} className="listaPedi">
                            <strong>{p.burgerM || p.burger} /</strong>
                            <strong>{p.carnesM || p.carnes} /</strong>
                            <strong>{p.chedarM || p.chedar} /</strong>
                            <strong>{p.ingredientesM || p.ingredientes} </strong>
                        </li>
                    ))
                }
                </ul>
            </div>
        </form>
    )
}