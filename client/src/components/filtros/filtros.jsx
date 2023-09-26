import { filter_continents, filter_activities, order_paises, order_population } from "../../Redux/actions";
import { useState } from "react";
import {useDispatch} from "react-redux";

export function Filtros(){
    const[aux,setAux]=useState(false)
    const dispatch=useDispatch
    
    const handleOrder=(event)=>{
        dispatch(order_paises(event.target.value))
        setAux(!aux)
    }

    const handleOrdenamiento=(event)=>{
        dispatch(order_population(event.target.value))
        setAux(!aux)
    }

    const handleFilter=(event)=>{
        dispatch(filter_continents(event.target.value))
    }

    const handleFilterAct=(event)=>{
        dispatch(filter_activities(event.target.value))
    }

    return(
        <>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleOrdenamiento}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
        </select>

        <select onChange={handleFilterAct}>
            <option value="All">All</option>
        </select>
        </>
    )



}