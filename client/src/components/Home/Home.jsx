import React from "react";
import { useSelector } from "react-redux";
import { Burger } from "../Burguesa/Hamburguesa";
import { NavBar } from "../NavBar";

export function Home(){


    const allBurgers = useSelector(state => state.burgers.allBurgers)


    // GetBurgers().then(burga =>{
    //     dispatch(getBurga(burga))
    // })
    


    // const burgas = dispatch(GetBurgers());

    return(
        <div>
            <NavBar/>
            <Burger Burgers={allBurgers}/>
        </div>
    )
}

