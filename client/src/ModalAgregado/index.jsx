import React from "react";
import { ReactDOM } from "react-dom";
import './ModalAgregado.css'

export function Modal ({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal-modificar')
    );
}