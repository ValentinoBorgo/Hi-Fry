import { modalAgendar, agendarPedido } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import './formAgendar.css'
import { useMemo, useState } from "react";
import { GetBurgers } from "../../redux/actions";

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
            pedido.length > 0 ?( 
            <button style={{ border: '3px solid red' }} onClick={e => open(e)}>Agendar Pedido</button>
        ) : (<button style={{pointerEvents : "none", opacity : 0.5 }} onClick={e => open(e)}>Agendar Pedido</button>)}
        </div>
    )
}

export function FormAgendar() {

    const dispatch = useDispatch();

    const pedido = useSelector(state => state.burgers.pedidos)

    const ids = useSelector(state => state.burgers.ids);

    const idNoModificado = useSelector(state => state.burgers.idNoModificado);

    const [estadoPedido, setEstadoPedido] = useState(pedido)
    
    let suma = 0;

    const [sumaTotal, setSumaTotal] = useState(suma);


    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalAgendar(!modalAgendar))
        dispatch(agendarPedido([...estadoPedido]))
    }

    const handleDelete = (e, idM, id) =>{
        e.preventDefault();
        for(let i = 0; i < pedido.length; i++){
            const actualizacion = [...estadoPedido];
            let actualizarPedido = actualizacion.filter(p => p.id != id || p.idM != idM);
            setEstadoPedido(actualizarPedido);
        }
        dispatch(agendarPedido([...estadoPedido]))
    }

    function calcularPrecioTotal(ids, idNoModificado){
        // Resolve problem with the autoincrement of suma.
        useMemo(() => {
            GetBurgers().then(burga => {
                for(let i = 0; i < pedido.length ; i++){
                    console.log(estadoPedido[i]);   
                    console.log(ids);
                    // The problem is that burga.id is undefined.
                    console.log(burga.id);
                    if(estadoPedido[i].id == burga.id){
                        suma = suma + burga[ids].precio;
                        console.log(suma+" primera");
                    }else if (estadoPedido[i].id == burga.id){
                        suma = suma + burga[idNoModificado-1].precio;
                        console.log(suma+" segunda");
                    }
                    setSumaTotal(suma);
                }
            })
        }, [pedido]);
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
                <label>Lista Pedido : </label>
                <table className="Tabla">
                    <tr>
                        <th>Hamburguesa</th>
                        <th>Carnes</th>
                        <th>Chedar</th>
                        <th>Comentarios</th>
                        <th>Eliminar</th>
                    </tr>
                {
                    estadoPedido?.map(p =>(
                        <tr key={p.idM || p.id} className="listaPedi">
                            <th>{p.burgerM || p.burger} </th>
                            <th>{p.carnesM || "D "+p.carnes} </th>
                            <th>{p.chedarM || "D "+p.chedar} </th>
                            <th>{p.ingredientesM || "D "+p.ingredientes}</th>
                            <th><button style={{color : 'red'}} onClick={(e) => handleDelete(e, p.idM, p.id)}>X</button></th>
                        </tr>
                    ))
                }
                </table>
            </div>
            <div>
                {calcularPrecioTotal(ids, idNoModificado)}
            </div>
            <button>Enviar a cola</button>
        </form>
    )
}