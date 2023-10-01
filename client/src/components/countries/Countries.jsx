import Countrie from "../countrie/Countrie";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Countries.module.css"
import { filter_continents, filter_activities, order_byName,order_byPopulation, traer_pais } from "../../Redux/actions";
import Filtros from "../filtros/filtros"
import { useDispatch, useSelector } from "react-redux";


export default function Countries() {
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);//son las paginas
  const [activities,setActivities]=useState([]);
  const[ordenado,setOrdenado]=useState("");
  const allCountries=useSelector((state)=>state.countries);
  
  const dispatch=useDispatch();
  const countriesPerPage = 10;//indico que me renderize solo 10 paises por pagina



  useEffect(() => {//monta el componente 
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/countries");//peticion a api
        dispatch(traer_pais(response.data))
        setCountryData(response.data);//actualiza los datos
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();//una vez que termina ejecuta la funcion con los datos actualizados
    return()=>{
      setCountryData([])//limpia el estado cuando el componente se desmonta,llevandonos al principio de la pagina 
    }
  }, [currentPage]);


  // Calcular índices de los países a mostrar en la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;//indico que en cada pagina van a haber 12 paises renderizados
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // const currentCountries = countryData.slice(
  //   indexOfFirstCountry,
  //   indexOfLastCountry
  // );// determina qué países deben mostrarse en la página actual segun el número de página 
  //y la cantidad de países por página.

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
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleActivitieChange=async(activities) =>{
    try{
      await dispatch(filter_activities(activities));
    }catch(error){
      console.error(error)
    }
  }

  // const handleContinentsChange=async(continents) =>{
  //   try{
  //     await dispatch(filter_continents(continents))

  //   }catch(error){
  //     console.error(error)
  //   }
  // }

  const handleContinentsChange=(event)=>{
    dispatch(filter_continents(event.target.value))
    setOrdenado("")
  }

  const handleOrderByName=(event) =>{
    dispatch(order_byName(event.target.value))
    setOrdenado(`ordenado por ${event.target.value}`)
  }

  const handleOrderByPopulation=(event) =>{
    dispatch(order_byPopulation(event.target.value))
    setOrdenado(`ordenado por ${event.target.value}`)
  }

  
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
         
        />
        // console.log(countries)
      ))}
      
      {/* Botones de paginación */}
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




