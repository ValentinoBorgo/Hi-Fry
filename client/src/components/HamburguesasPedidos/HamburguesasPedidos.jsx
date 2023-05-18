import React from "react";
import { useSelector } from "react-redux";
import { Burger } from "../Burguesa/Hamburguesa";
import { Modal } from "../../ModalAgregado";
import { ModificarHamburguesa } from "../FormModificarHamburguesa/index";
import { ModalA } from "../../Modal";
import { AgregarHamburguesa } from "../FormAgregado";

export default function HamburguesasPedidos() {


    const allBurgers = useSelector(state => state.burgers.allBurgers)

    const modalModificar = useSelector(state => state.burgers.modificarAbierto);

    const modalAgregar = useSelector(state => state.burgers.modalAgregar);

    const burgersM = useSelector(state => state.burgers.burgaM);

    return (
        <div>
            <div>
                <h1>✔️ 1</h1>
                <h2>Estado de pedido</h2>
                <p id="pedidos"></p>
                <button style={{border : '3px solid red'}}>Agendar Pedido</button>
            </div>
            <Burger Burgers={allBurgers} />
            {
                modalModificar && (
                    <Modal>
                        <ModificarHamburguesa />
                    </Modal>
                )
            }
            {
                modalAgregar && (
                    <ModalA>
                        <AgregarHamburguesa burgersM={burgersM}/>
                    </ModalA>
                )
            }
        </div>
    )
}

