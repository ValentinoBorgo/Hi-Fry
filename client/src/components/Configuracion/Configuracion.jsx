import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {agregarNewHamburguesa} from '../../redux/actions/index'; 

export default function Configuración() {

    const [datosAgregado, setDatosAgregado] = useState({
        burger: '',
        carnes: '',
        chedar: '',
        ingredientes: '',
        precio: '',
        // llave: '',
        pan : 1,
        img : ''
    });

    const [mostrarAgregado, setMostrarAgregado] = useState(false);
    const nombre = datosAgregado.burger;
    const img = datosAgregado.img;
    const carnes = datosAgregado.carnes;
    const chedar = datosAgregado.chedar;
    const ingre = datosAgregado.ingredientes;
    const precio = datosAgregado.precio;
    // const panes = 1;
    // const [key, setKey] = useState(datosAgregado.llave);

    // const generadorLlave = () =>{
    //     const llave = uuidv4();
    //     setKey(datosAgregado.llave = llave);
    // }

    const handleAgred = (e) => {
        e.preventDefault();
        setMostrarAgregado(!mostrarAgregado);
        // generadorLlave();
    }

    const handelName = (e) => {
        e.preventDefault();
        datosAgregado.burger = e.target.value;
    }

    const handleImg = (e) =>{
        e.preventDefault(); 
        datosAgregado.img = e.target.value;
    }

    const handleCarnes = (e) =>{
        e.preventDefault();
        datosAgregado.carnes = e.target.value;
    }

    const handleChedar = (e) =>{
        e.preventDefault();
        datosAgregado.chedar = e.target.value;
    }

    const handleIngredientes = (e) =>{
        e.preventDefault();
        datosAgregado.ingredientes = e.target.value;
    }

    const handlePrecio = (e) =>{
        e.preventDefault();
        datosAgregado.precio = e.target.value;
    }

    const handleNewBurga = (e) =>{
        e.preventDefault();
        setMostrarAgregado(!mostrarAgregado);
        setDatosAgregado({
            burger: nombre,
            carnes: carnes,
            chedar: chedar,
            ingredientes: ingre,
            precio: precio,
            pan : 1,    
            img : img
        });
        agregarNewHamburguesa(datosAgregado);
    }

    return (
        <>
            <div>
                <button onClick={(e) => handleAgred(e)}>Agregar Hamburguesa</button>
            </div>
            {
                mostrarAgregado && (
                    <div>
                        <div>
                            <label htmlFor="">Nombre : </label>
                            <input type="text" onChange={(e) => handelName(e)} />
                        </div>
                        <div>
                            <label htmlFor="">Imagen : </label>
                            <input type="url" onChange={(e) => handleImg(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Carnes : </label>
                            <input type="number" onChange={(e) => handleCarnes(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Chedar : </label>
                            <input type="number" onChange={(e) => handleChedar(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Ingredientes : </label>
                            <input type="text" onChange={(e) => handleIngredientes(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Precio : </label>
                            <input type="text" onChange={(e) => handlePrecio(e)}/>
                        </div>
                        <div>
                            <label htmlFor="" hidden>Llave : </label>
                            <input type="text" hidden/>
                        </div>
                        <div>
                            <button onClick={(e) => handleNewBurga(e)} style={{ color: 'red', borderRadius: '1rem' }}>Agregar</button>
                        </div>
                    </div>
                )
            }
            <br />
            <div>
                <select name="" id="">
                    <option value="">Modificar Hamburguesa</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                <br />
                <button>Aceptar</button>
            </div>
            <br />
            <div>
                <button>Elliminar Hamburguesa</button>
            </div>
        </>
    )
}