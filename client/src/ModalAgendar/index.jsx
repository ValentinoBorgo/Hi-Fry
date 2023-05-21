import React from "react";
import  ReactDOM  from "react-dom";
import './ModalAgendado.css'

export function ModalAgendar ({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal-agendar')
    );
}