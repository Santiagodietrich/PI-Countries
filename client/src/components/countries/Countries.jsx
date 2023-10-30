import Countrie from "../countrie/Countrie";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Countries.module.css"
import {traer_pais } from "../../Redux/actions";
import Filtros from "../filtros/filtros"
import { useDispatch, useSelector } from "react-redux";


export default function Countries() {
  const [countryData, setCountryData] = useState([]);//creo mi estado inicial
  const [currentPage, setCurrentPage] = useState(1);//son las paginas
  const [activities,setActivities]=useState([]);
  const[ordenado,setOrdenado]=useState("");
  const allCountries=useSelector((state)=>state.filtered);//me traigo los datos que trabaje en reducer
  const selectedActivityCountry = useSelector((state) => state.selectedCountry);
  
  
  const dispatch=useDispatch();
  const countriesPerPage = 10;//indico que me renderize solo 10 paises por pagina



  useEffect(() => {//monta el componente 
    dispatch(traer_pais())
  },[dispatch]);


  const indexOfLastCountry = currentPage * countriesPerPage;//indico que en cada pagina van a haber 12 paises renderizados
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;


  const currentCountries=allCountries.slice(indexOfFirstCountry,indexOfLastCountry)


  // Cambiar a la página siguiente
  const nextPage = () => {
    if (currentPage < Math.ceil(countryData.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {//indico que si la pagina actual es mayor a uno, puedo volver una pagina atras
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className={styles.FlexContainer}>
      <Filtros activities={activities} setActivities={setActivities}></Filtros>
      {currentCountries.map((element) => (//mapeamos currentCountries que es quien tiene cargadas las 12 cards 
        <Countrie
          key={element.id}
          id={element.id}
          name={element.name}
          flags={element.flags}
          continents={element.continents}
          capital={element.capital}
          subregion={element.subregion}
          area={element.area}
          population={element.population}
          activities={element.Activities}
         
        />

      ))}

      
      <div>
        <button className={styles.preview} onClick={prevPage} disabled={currentPage === 1}>
        <svg className={styles.svgIcon }viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
          Previous
        </button>
        <button className={styles.button}
          onClick={nextPage}
          disabled={currentPage === Math.ceil(countryData.length / countriesPerPage)}//deshabilita el boton cuando llega a la ultima pagina 
        >
          <svg className={styles.svgIcono }viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
        Next
          
        </button>
      </div>
    </div>
  );
}




