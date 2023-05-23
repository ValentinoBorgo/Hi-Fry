import { modalAgendar, getBurga } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import './formAgendar.css'
import { useMemo, useState } from "react";
import { GetBurgers } from "../../redux/actions";

export function EstadoPedido() {

    const contModificaciones = useSelector(state => state.burgers.contModificaciones);

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
            pedido.length > 0 ?( 
            <button style={{ border: '3px solid red' }} onClick={e => open(e)}>Agendar Pedido</button>
        ) : (<button style={{pointerEvents : "none", opacity : 0.5 }} onClick={e => open(e)}>Agendar Pedido</button>)}
        </div>
    )
}

export function FormAgendar() {

    const dispatch = useDispatch();

    const pedido = useSelector(state => state.burgers.pedidos)
    
    let [sumaTotal, setSumaTotal] = useState(0);

    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAgendar))
    }

    function calcularPrecioTotal(){
        useMemo(() => {
            GetBurgers().then(burga => {
                for(let i = 0; i < pedido.length ; i++){
                    if(pedido[i].id == burga.id || pedido[i].idM == burga.id){
                        sumaTotal = sumaTotal + burga[i].precio;
                        setSumaTotal(sumaTotal);
                    }
                }
            })
        }, []);
        return(
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
            <div>
                {calcularPrecioTotal()}
            </div>
        </form>
    )
}