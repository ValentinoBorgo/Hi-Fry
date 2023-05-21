import React from "react";
import { useSelector } from "react-redux";
import { Burger } from "../Burguesa/Hamburguesa";
import { Modal } from "../../ModalAgregado";
import { ModificarHamburguesa } from "../FormModificarHamburguesa/index";
import { ModalA } from "../../Modal";
import { AgregarHamburguesa} from "../FormAgregado";
import { ModalAgendar } from "../../ModalAgendar";
import { EstadoPedido, FormAgendar } from "../EstadoPedido";

export default function HamburguesasPedidos() {


    const allBurgers = useSelector(state => state.burgers.allBurgers)

    const modalModificar = useSelector(state => state.burgers.modificarAbierto);

    const modalAgregar = useSelector(state => state.burgers.modalAgregar);

    const burgersM = useSelector(state => state.burgers.burgaM);

    const modalAgendar = useSelector(state => state.burgers.modalAgendar);

    return (
        <div>
            <EstadoPedido />
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
            {
                modalAgendar && (
                    <ModalAgendar>
                        <FormAgendar />   
                    </ModalAgendar>
                )
            }
        </div>
    )
}

