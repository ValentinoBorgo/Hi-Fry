import React, { useState } from "react";

export default function Configuración() {

    const [datosAgregado, setDatosAgregado] = useState({
        Nombre: '',
        Carnes: '',
        Chedar: '',
        ingredientes: '',
        precio: '',
        llave: '',
        img : ''
    });

    const [mostrarAgregado, setMostrarAgregado] = useState(false);
    const nombre = datosAgregado.Nombre;
    const img = datosAgregado.img;

    const handleAgred = (e) => {
        e.preventDefault();
        setMostrarAgregado(!mostrarAgregado);
        setDatosAgregado({
            Nombre: nombre,
            Carnes: '',
            Chedar: '',
            ingredientes: '',
            precio: '',
            llave: '',
            img : img
        })
        console.log(datosAgregado);
    }

    const handelName = (e) => {
        e.preventDefault();
        datosAgregado.Nombre = e.target.value;
    }

    const handleImg = (e) =>{
        e.preventDefault(); 
        datosAgregado.img = e.target.value;
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
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Chedar : </label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Ingredientes : </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Llave : </label>
                            <input type="text" />
                        </div>
                        <div>
                            <button style={{ color: 'red', borderRadius: '1rem' }}>Agregar</button>
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