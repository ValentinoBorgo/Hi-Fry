import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalModificar, realizarModificaciones } from "../../redux/reducer/reducer";
import './formModificar.css'

export function ModificarHamburguesa() {

    const dispatch = useDispatch();

    const stateModal = useSelector(state => state.burgers.modificarAbierto)
    
    const cancel = (e) => {
        e.preventDefault();
        dispatch(modalModificar(!stateModal));
    }
    
    const carnes = document.getElementById('numCarnes');
    const chedar = document.getElementById('numChedar');
    const [contCarnes, setContCarnes] = useState(0);
    const [contChedar, setContChedar] = useState(0);
    const [ingredientes, setIngredientes] = useState('');
    
    const handleSumCarnes = (e) =>{
        e.preventDefault();
        setContCarnes(contCarnes + 1);
    }

    const handleRestCarnes = (e) =>{
        e.preventDefault();
        if(contCarnes > 0){
            setContCarnes(contCarnes - 1);
        }
    }

    const handleSumChedar = (e) =>{
        e.preventDefault();
        setContChedar(contChedar + 1);
    }

    const handleRestChedar = (e) =>{
        e.preventDefault();
        if(contChedar > 0){
            setContChedar(contChedar - 1);
        }
    }

    const handleChange = (e) =>{
        e.preventDefault();
    }

    const handleChangeChedar = (e) =>{
        e.preventDefault();
    }

    
    
    const handleText = (e) =>{
        e.preventDefault();
        setIngredientes(e.target.value);
        console.log(ingredientes);
    }

    const [datos, setDatos] = useState({
        carnes : '',
        chedar : '',
        ingredientes : ''
    });

    let estadoMofidificaciones = useSelector(state => state.burgers.modificaciones);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setDatos({
            carnes : contCarnes,
            chedar : contChedar,
            ingredientes: ingredientes})
            console.log(datos);
        dispatch(realizarModificaciones(datos))
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button onClick={cancel}>X</button>
            <div className="divs">
                <label>Carnes</label>
                <button className="btns" onClick={(e) => handleSumCarnes(e)}>+</button>
                <input id="numCarnes" type="number" onChange={(e) =>handleChange(e)} name="carnes" value={contCarnes}></input>
                <button className="btns" onClick={(e) => handleRestCarnes(e)}>-</button>
            </div>
            <div className="divs">
                <label>Chedar</label>
                <button className="btns" onClick={(e) => handleSumChedar(e)}>+</button>
                <input id="numChedar" type="number" value={contChedar} name="chedar" onChange={(e) =>handleChangeChedar(e)}></input>
                <button className="btns" onClick={(e) => handleRestChedar(e)}>-</button>
            </div>
            <div className="divs">
                <label>Ingredientes</label>
                <textarea cols="30" rows="10" placeholder="Indique sus ingredientes" name="ingredientes" onChange={(e) =>handleText(e)}></textarea>
            </div>
            <input type="submit" value="Aceptar"/>
        </form>
    )
    }