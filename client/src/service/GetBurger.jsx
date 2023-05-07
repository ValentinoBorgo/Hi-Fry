import React from "react";
import { useState, useEffect } from "react";


export function GetBurger(){

    const [datos, setDatos] = useState([]);

    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/hamburguesas');
        const jsonData = await response.json();
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