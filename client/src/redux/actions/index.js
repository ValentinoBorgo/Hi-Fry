import React from "react";
import axios from "axios";


export const GetBurgers = async () =>{
    try{
      const  burgers  = await axios.get('http://localhost:4000/api/hamburguesas/BD');
      return burgers.data;
    }catch(error){
      console.log(error);
    }
  }


export const GetBurgersM = async (idM) =>{
  try{
    const burger = await axios.get(`http://localhost:4000/api/hamburguesas/${idM}`)
    return burger.data;
  }catch(error){
    console.log(error)
  }
}

export const agregarHM = async (dat) =>{
  try{
    const hm = await axios.post(`http://localhost:4000/api/hamburguesas/agregadoM`, dat);
    console.log(hm.data);
  }catch(error){
    console.log(error);
  }
}

export const agregarAListado = async (data) =>{
  try{
    const listado = await axios.post(`http://localhost:4000/api/hamburguesas/listadoPedidos`, data);
    console.log(listado.data);
  }catch(error){
    console.log(error);
  }
}

export const agregarNewHamburguesa = async (burger) =>{
  try{
    const NewBurga = await axios.post(`http://localhost:4000/api/hamburguesas/agregado`, burger);
    console.log("Hamburguesa se Agrego");
  }catch(error){
    console.log(error);
  }
}

// export const eliminarHamburguesa = async (burger) =>{
//   try{
//     const eliminar = axios.delete()
//   }catch(){

//   }
// }

export const IdMax = async () =>{
  try{
    const id = await axios.get(`http://localhost:4000/api/hamburguesas/traerIdMax`);
    return id;
  }catch(error){
    console.log(error);
  }
}