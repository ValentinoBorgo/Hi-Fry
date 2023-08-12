import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { GetBurgers, IdMax, agregarNewHamburguesa, buscarNombres } from '../../redux/actions/index';
import { getBurga } from "../../redux/reducer/reducer";

export default function Configuración() {

    const [datosAgregado, setDatosAgregado] = useState({
        id: '',
        burger: '',
        carnes: '',
        chedar: '',
        ingredientes: '',
        precio: '',
        // llave: '',
        pan: 1,
        img: ''
    });

    const [mostrarEliminar, setMostrarEliminar] = useState(false);
    const [mostrarAgregado, setMostrarAgregado] = useState(false);
    const [mostrarModificar, setMostrarModificar] = useState(false);
    let id = datosAgregado.id;
    const nombre = datosAgregado.burger;
    const img = datosAgregado.img;
    const carnes = datosAgregado.carnes;
    const chedar = datosAgregado.chedar;
    const ingre = datosAgregado.ingredientes;
    const precio = datosAgregado.precio;

    // const nombreBurguers = [];

    // const nombres = [];
    // GetBurgers().then(burga => {
    //     nombreBurguers.push(getBurga(burga));
    //     for (let i = 0; i < nombreBurguers[0].payload.length; i++) {
    //         nombres.push(nombreBurguers[0].payload[i].burger);
    //     }
    // })

    const handleAgred = (e) => {
        e.preventDefault();
        setMostrarAgregado(!mostrarAgregado);
    }

    const handelName = (e) => {
        e.preventDefault();
        datosAgregado.burger = e.target.value;
    }

    const handleImg = (e) => {
        e.preventDefault();
        datosAgregado.img = e.target.value;
    }

    const handleCarnes = (e) => {
        e.preventDefault();
        datosAgregado.carnes = e.target.value;
    }

    const handleChedar = (e) => {
        e.preventDefault();
        datosAgregado.chedar = e.target.value;
    }

    const handleIngredientes = (e) => {
        e.preventDefault();
        datosAgregado.ingredientes = e.target.value;
    }

    const handlePrecio = (e) => {
        e.preventDefault();
        datosAgregado.precio = e.target.value;
    }

    const handleNewBurga = (e) => {
        e.preventDefault();
        setMostrarAgregado(!mostrarAgregado);
        id = IdMax();
        id = id + 1;
        setDatosAgregado({
            id: id,
            burger: nombre,
            carnes: carnes,
            chedar: chedar,
            ingredientes: ingre,
            precio: precio,
            pan: 1,
            img: img
        });
        agregarNewHamburguesa(datosAgregado);
    }

    let nombres = buscarNombres();
    const [arrayNombres, setArrayNombres] = useState([]);
    const handleDelete = (e) => {
        setMostrarEliminar(!mostrarEliminar);
        e.preventDefault();
        nombres.then(n => {
            setArrayNombres(n);
        })
    }

    const handleModi = (e) =>{
        setMostrarModificar(!mostrarModificar);
        e.preventDefault();
        nombres.then(n => {
            setArrayNombres(n);
        })
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
                            <input type="url" onChange={(e) => handleImg(e)} />
                        </div>
                        <div>
                            <label htmlFor="">Carnes : </label>
                            <input type="number" onChange={(e) => handleCarnes(e)} />
                        </div>
                        <div>
                            <label htmlFor="">Chedar : </label>
                            <input type="number" onChange={(e) => handleChedar(e)} />
                        </div>
                        <div>
                            <label htmlFor="">Ingredientes : </label>
                            <input type="text" onChange={(e) => handleIngredientes(e)} />
                        </div>
                        <div>
                            <label htmlFor="">Precio : </label>
                            <input type="text" onChange={(e) => handlePrecio(e)} />
                        </div>
                        <div>
                            <label htmlFor="" hidden>Llave : </label>
                            <input type="text" hidden />
                        </div>
                        <div>
                            <button onClick={(e) => handleNewBurga(e)} style={{ color: 'red', borderRadius: '1rem' }}>Agregar</button>
                        </div>
                    </div>
                )
            }
            <br />
            <div>
                <button onClick={(e) => handleModi(e)}>Modificar Hamburguesa</button>
            </div>
            { mostrarModificar && (
            <div>
                <select name="" id="">
                    <option value="">Modificar Hamburguesa 🍔</option>
                    <option value="">{arrayNombres[0]}</option>
                    <option value="">{arrayNombres[1]}</option>
                    <option value="">{arrayNombres[2]}</option>
                    <option value="">{arrayNombres[3]}</option>
                    <option value="">{arrayNombres[4]}</option>
                    <option value="">{arrayNombres[5]}</option>
                    <option value="">{arrayNombres[6]}</option>
                    <option value="">{arrayNombres[7]}</option>
                    <option value="">{arrayNombres[8]}</option>
                    <option value="">{arrayNombres[9]}</option>
                </select>
                <br />
                <button>Aceptar</button>
            </div>
            )}
            <br />
            <div>
                <button onClick={(e) => handleDelete(e)}>Elliminar Hamburguesa</button>
            </div>
            {
                mostrarEliminar && (
                    <div>
                        <div>
                            <select name="" id="eliminar">
                                <option value="">Seleccione Hamburguesa 🍔</option>
                                <option value="">{arrayNombres[0]}</option>
                                <option value="">{arrayNombres[1]}</option>
                                <option value="">{arrayNombres[2]}</option>
                                <option value="">{arrayNombres[3]}</option>
                                <option value="">{arrayNombres[4]}</option>
                                <option value="">{arrayNombres[5]}</option>
                                <option value="">{arrayNombres[6]}</option>
                                <option value="">{arrayNombres[7]}</option>
                                <option value="">{arrayNombres[8]}</option>
                                <option value="">{arrayNombres[9]}</option>
                            </select>
                            <br />
                            <button>Aceptar</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}