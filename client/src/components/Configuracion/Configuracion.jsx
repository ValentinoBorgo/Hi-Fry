import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { GetBurgers, IdMax, agregarNewHamburguesa, buscarNombres, eliminarHamburguesa, modificarCampo } from '../../redux/actions/index';
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
    const [opcionesModificar, setOpcionesModificar] = useState(false);
    const [propModi, setPropModi] = useState(false);

    let id = datosAgregado.id;
    const nombre = datosAgregado.burger;
    const img = datosAgregado.img;
    const carnes = datosAgregado.carnes;
    const chedar = datosAgregado.chedar;
    const ingre = datosAgregado.ingredientes;
    const precio = datosAgregado.precio;

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
    let arrayNombres = [];

    const handleDelete = (e) => {
        setMostrarEliminar(!mostrarEliminar);
        e.preventDefault();
        nombres.then(n => {
            arrayNombres = n;
            addNewOptionELIM();
        })
    }

    const handleModi = (e) => {
        if (opcionesModificar == true) {
            setOpcionesModificar(false);
        }
        setMostrarModificar(!mostrarModificar);
        e.preventDefault();
        nombres.then(n => {
            arrayNombres = n;
            addNewOptionOTP();
        })
    }

    function addNewOptionOTP() {
        let optModi = document.getElementById('optModi');
        for (let i = 0; i < arrayNombres.length; i++) {
            let nuevaOpcion = document.createElement('option');
            nuevaOpcion.innerHTML = arrayNombres[i];
            nuevaOpcion.value = arrayNombres[i];
            optModi.appendChild(nuevaOpcion);
        }
    }

    function addNewOptionELIM() {
        let eliminar = document.getElementById('eliminar');
        for (let i = 0; i < arrayNombres.length; i++) {
            let nuevaOpcion = document.createElement('option');
            nuevaOpcion.innerHTML = arrayNombres[i];
            nuevaOpcion.value = arrayNombres[i];
            eliminar.appendChild(nuevaOpcion);
        }
    }

    const [burga, setBurga] = useState('');
    const handleConfirmOTP = (e) => {
        e.preventDefault();
        let optModi = document.getElementById('optModi');
        if (optModi.value == '') {
            alert("Debe seleccionar una hamburguesa para modificar !");
        } else {
            setOpcionesModificar(!opcionesModificar);
            setBurga(optModi.value);
        }
    }

    const handleConfirmElim = (e) => {
        e.preventDefault();
        let eliminar = document.getElementById('eliminar');
        eliminarHamburguesa(eliminar.value);
    }

    const [estadoNombreProp, setEstadoNombreProp] = useState('');
    const handlePropModificar = (e) =>{
        e.preventDefault();
        let propmodi = document.getElementById('propModificar');
        setEstadoNombreProp(propmodi.value);
        console.log(estadoNombreProp);
        console.log(propmodi.value);
        if(propmodi.value == ''){
            alert("Por favor elija una propiedad a modificar");
        }else{
            if(propModi == true){
                propModi == true
            }else{
                setPropModi(!propModi);
            }
        }
    }

    
    const MODIFICACION = (e) =>{
        //HACER QUE SE CONECTE CON LOS CONTROLADORES Y HAGAN EL CAMBIO EFECTIVO EN LA BD
        e.preventDefault();
        let propYaModificada = document.getElementById('propiedadModificada');
        let obj = {
            nombre : burga,
            nombrePropiedad : estadoNombreProp,
            propiedad : propYaModificada.value
        }
        modificarCampo(obj);
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
            {
                mostrarModificar && (
                    <div>
                        <select name="" id="optModi">
                            <option value="">Modificar Hamburguesa 🍔</option>
                        </select>
                        <br />
                        <button onClick={(e) => handleConfirmOTP(e)}>Aceptar</button>
                    </div>
                )}
            <div>
                {
                    opcionesModificar && (
                        <div>
                            <h3>Modifique su {burga} 🍔</h3>
                            <label htmlFor="">Eliga la propiedad a modificar :  </label>
                            <select name="" id="propModificar" onChange={(e) => handlePropModificar(e)}>
                                <option value="">Elija</option>
                                <option value="burger">Nombre</option>
                                <option value="img">Imagen</option>
                                <option value="carnes">Carnes</option>
                                <option value="chedar">Chedar</option>
                                <option value="ingredientes">Ingredientes</option>
                                <option value="precio">Precio</option>
                            </select>
                        </div>
                    )}
            </div >
            <div>
                {
                    propModi && (
                        <div>
                            <label htmlFor=""> {estadoNombreProp} </label>
                            <input type="text" id="propiedadModificada"/>
                            <br />
                            <button onClick={(e) => MODIFICACION(e)}> Realizar Modificacion </button>
                        </div>   
                )}
            </div>
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
                            </select>
                            <br />
                            <button onClick={(e) => handleConfirmElim(e)}>Aceptar</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}