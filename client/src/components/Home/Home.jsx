import React from "react";
import { useSelector } from "react-redux";
import { Burger } from "../Burguesa/Hamburguesa";
import { NavBar } from "../NavBar";
import { Modal } from "../../ModalAgregado";
import { ModificarHamburguesa } from "../FormModificarHamburguesa/index";
import { ModalA } from "../../Modal";
import { AgregarHamburguesa } from "../FormAgregado";

export function Home() {


    const allBurgers = useSelector(state => state.burgers.allBurgers)

    const modalModificar = useSelector(state => state.burgers.modificarAbierto);

    const modalAgregar = useSelector(state => state.burgers.modalAgregar);

    const burgersM = useSelector(state => state.burgers.burgaM);

    return (
        <div>
            <NavBar />
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

