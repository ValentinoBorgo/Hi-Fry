import React from "react";
import { useState, useEffect } from "react";


export function GetBurger(){

    const [datos, setDatos] = useState([]);
    let burgers = [];

    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hamburguesas/BD');
        const jsonData = await response.json();
        jsonData.map(h =>{
          burgers.push({
            id : h.id,
            burger : h.burger,
            price : h.price,
            img : h.img,
            carnes : h.carnes,
            chedar : h.chedar,
            ingredientes : h.ingredientes
          })
        })
        setDatos(jsonData);
      } catch (error) {
        console.log(error);
      }
    };


    useEffect(() => {
      fetchData();
    }, []);

    return {datos};

}