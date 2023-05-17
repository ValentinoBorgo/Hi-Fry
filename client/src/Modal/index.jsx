import React from "react";
import  ReactDOM  from "react-dom";
import './modal.css'

export function ModalA ({children}){
    return ReactDOM.createPortal(
        <div className="ModalA">
            {children}
        </div>,
        document.getElementById('modal-agregar')
    );
}