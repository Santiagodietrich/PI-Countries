import { filter_continents, filter_activities, order_byName , order_byPopulation} from "../../Redux/actions";
import React,{ useState, useEffect } from "react";
import {useDispatch} from "react-redux";

export default  function Filtros({activities, setActivities}){
    const dispatch=useDispatch()
    
    const[selectedActivity, setSelectedActivity]=useState('');
    const[selectedCountry, setSelectedCountry]=useState('');

    useEffect(()=>{
        if(activities && activities.length > 0){
            setActivities(activities);
        }
    },[activities])

    const handleActChange=async(activitie)=>{
        setSelectedActivity(activitie);
        try{
            await dispatch(filter_activities(activitie))
        }catch(error){
            console.error(error);
        }
    }

    const handleContiChange=async (continent)=>{
        setSelectedCountry(continent);
        try{
            await dispatch(filter_continents(continent))
        }catch(error){
            console.error(error)
        }
       
    }

  

    const handleOrderCountries=async(event)=>{
        // try{
        //     await dispatch(order_asc());
        // }catch(error){
        //     console.error(error);
        // }
        
        dispatch(order_byName(event.target.value))
    }

    const handleOrderPopulation=async(event)=>{
        dispatch(order_byPopulation(event.target.value))
        // selectedCountry(`ordenado por ${event.target.value}`)
    }


    return(
        <div>
      <div>
        <label>Filtrar por Actividad:</label>
        <select value={selectedActivity} onChange={(e) => handleActChange(e.target.value)}>
          <option value="">Todos</option>
          {activities.map((activitie) => (
            <option key={activitie} value={activitie}>
              {activitie}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Filtrar por Continente:</label>
        <select value={selectedCountry} onChange={(e) => handleContiChange(e.target.value)}>
          <option value="">Todos loc continentes</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Antartica">Antartica</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
          
        </select>
      </div>
      <div>
        <label htmlFor="ordenalfabetico">Orden Alfabetico</label>
        <select id="ordenalfabetico" onChange={event=>handleOrderCountries(event)}>
            <option >Seleccionar</option>
            <option value="PorDefecto">Por Defecto</option>
            <option value="Ascendente">A-Z</option>
            <option value="Descendente">Z-A</option>
        </select>
      </div>
      <div>
        <label htmlFor="CantidadPoblacion">Orden Poblacion</label>
        <select  id="CantidadPoblacion" onChange={event=>handleOrderPopulation(event)}>
            <option >Seleccionar</option>
            <option value="PorDefecto">Por Defecto</option>
            <option value="Ascendente">A-Z</option>
            <option value="Descendente">Z-A</option>
        </select>
      </div>
     
    </div>
    )



}


