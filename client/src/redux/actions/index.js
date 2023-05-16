import React from "react";
import axios from "axios";
import { useState } from "react";


export const GetBurgers = async () =>{

    try{
      const  burgers  = await axios.get('http://localhost:4000/api/hamburguesas/BD');
      return burgers.data;
    }catch(error){
      console.log(error);
    }
  }