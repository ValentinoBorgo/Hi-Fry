import React from "react";
import { useState, useEffect } from "react";

export function UseBurger(){

    const [datos, setData] = useState([]);

    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/hamburguesas');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };


    useEffect(() => {
      fetchData();
      return(
        datos
      )
    }, []);

}