import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalModificar } from "../../redux/reducer/reducer";
import './formModificar.css'

export function ModificarHamburguesa() {

    const dispatch = useDispatch();

    const stateModal = useSelector(state => state.burgers.modificarAbierto)

    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalModificar(!stateModal));
    }
    
    const carnes = document.getElementById('numCarnes');
    let contCarnes = 0;
    
    const handleSum = (e) =>{
        e.preventDefault();
        contCarnes++;
        carnes.innerHTML = contCarnes;
    }

    return (
        <form>
            <button onClick={cancel}>X</button>
            <div className="divs">
                <label>Carnes</label>
                <button className="btns" onClick={(e) => handleSum(e)}>+</button>
                <p id="numCarnes">0</p>
                <button className="btns">-</button>
            </div>
            <div className="divs">
                <label>Chedar</label>
                <button className="btns">+</button>
                <p>0</p>
                <button className="btns">-</button>
            </div>
            <div className="divs">
                <label>Ingredientes</label>
                <textarea cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="Aceptar"/>
        </form>
    )
}