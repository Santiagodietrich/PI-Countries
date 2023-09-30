import { filter_continents, filter_activities, order_asc, order_desc } from "../../Redux/actions";
import React,{ useState, useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";

export default  function Filtros({activities, setActivities}){
    const countries=useSelector((state) => state.filteredCountries)//usar los paises filtrados
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

    const handleFilter=(event)=>{
        dispatch(filter_continents(event.target.value))
    }

    const handleOrderA=async()=>{
        try{
            await dispatch(order_asc());
        }catch(error){
            console.error(error);
        }
    }

    const handleOrderD=async()=>{
        try{
            await dispatch(order_desc());
        }catch(error){
            console.error(error);
        }
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
        <button onClick={handleOrderA}>Ordenar Ascendente</button>
        <button onClick={handleOrderD}>Ordenar Descendente</button>
      </div>
     
    </div>
    )



}