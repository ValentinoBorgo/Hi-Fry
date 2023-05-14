import React from "react";
import { useSelector } from "react-redux";
import { Burger } from "../Burguesa/Hamburguesa";
import { NavBar } from "../NavBar";
import { Modal } from "../../ModalAgregado";
import { ModificarHamburguesa } from "../FormModificarHamburguesa/index";


export function Home() {


    const allBurgers = useSelector(state => state.burgers.allBurgers)

    const modalModificar = useSelector(state => state.burgers.modificarAbierto);

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
        </div>
    )
}

