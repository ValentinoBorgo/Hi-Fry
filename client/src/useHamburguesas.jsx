import React from "react";
import { useState } from "react";

function useHamburguesas(){

    const [modificarAbierto, setModificar] = useState(false);

    let cambiarModificar = () =>{
        modificarAbierto;
    }

    return {setModificar, cambiarModificar, modificarAbierto}

}

export {useHamburguesas};