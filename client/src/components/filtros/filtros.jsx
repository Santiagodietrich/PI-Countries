import { filter_continents, get_activities, order_byName , order_byPopulation,filter_activities, traer_pais} from "../../Redux/actions";
import React,{ useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./filtros.module.css";

// const actividades=useSelector((state)=>state.actividad)

export default  function Filtros({activities, setActivities}){
    const dispatch=useDispatch()
    
    const[selectedActivity, setSelectedActivity]=useState([]);//creo un estado inicial para mis actividades
    const[selectedCountry, setSelectedCountry]=useState([]);//creo un estado inicial para mis paises
    const activi= useSelector((state)=> state.actividad)
    const countries= useSelector((state)=>state.countries)

 

   
    useEffect(() => {//monta el componente 
      dispatch(traer_pais())
      dispatch(get_activities())
    },[dispatch]);

  

    // const handleActChange=async(event)=>{
    //   // event.preventDefault();
    //   if(event.target.value === "All"){
    //     dispatch(traer_pais())
    //   }
    //   dispatch(filter_activities(event.target.value))
    //   console.log("valiuuu",event.target.value)
    // }


    const handleActChange = async (event) => {
      if (event.target.value === "All") {
        dispatch(traer_pais());
      } else {
        dispatch(filter_activities(event.target.value));
        const selectedActivityCountries = activi.find(activity => activity.name === event.target.value);
        setSelectedCountry(selectedActivityCountries ? selectedActivityCountries.Countries : []);
      }
      setSelectedActivity(event.target.value);
    };
    
     
    
   
  
    
    

    const handleContiChange=async (continent)=>{
        setSelectedCountry(continent);
        try{
            await dispatch(filter_continents(continent))
        }catch(error){
            console.error(error)
        }
       
    }

    const handleOrderCountries=async(event)=>{ 
        dispatch(order_byName(event.target.value))
        console.log(event.target.value)
    }

    const handleOrderPopulation=async(event)=>{//me traigo el evento con su valor desde reducer y lo despacho con el valor que yo seleccione
        dispatch(order_byPopulation(event.target.value))
    }

    return(
    <div className={styles.filtro}>
      
      <div>
        <label>Filtrar por Actividad:</label>
        <select value={selectedActivity} onChange={handleActChange}>
          <option>Activities</option>
          <option value="All">Todos</option>
          {activi.map((activity, index) => (
            <option key={index} value={activity.name}>
              {activity.name}
              
            </option>
          ))}
        </select>
      </div>

      

      <div>
        <label>Filtrar por Continente:</label>
        <select value={selectedCountry} onChange={(e) => handleContiChange(e.target.value)}>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div>
        <label htmlFor="ordenalfabetico">Orden Alfabetico</label>
        <select id="ordenalfabetico" onChange={event=>handleOrderCountries(event)}>
            <option value="Ascendente">A-Z</option>
            <option value="Descendente">Z-A</option>
        </select>
      </div>
      <div>
        <label htmlFor="CantidadPoblacion">Orden Poblacion</label>
        <select  id="CantidadPoblacion" onChange={event=>handleOrderPopulation(event)}>
            
            <option value="Ascendente">A-Z</option>
            <option value="Descendente">Z-A</option>
        </select>
      </div>
    </div>
    )

          

}


