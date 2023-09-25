import Countrie from "../countrie/Countrie";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Countries.module.css"

export default function Countries({ paises, onClose }) {
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);//son las paginas
  const countriesPerPage = 10;//indico que me renderize solo 12 paises por pagina

  useEffect(() => {//monta el componente 
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/countries");//peticion a api
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
  const currentCountries = countryData.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );// determina qué países deben mostrarse en la página actual segun el número de página 
  //y la cantidad de países por página.



  // Cambiar a la página siguiente
  const nextPage = () => {
    // if (currentPage < Math.ceil(countryData.length / countriesPerPage)) {
    //   setCurrentPage(currentPage + 1);
    // }
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.FlexContainer}>
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
          onClose={() => onClose(element.id)}
        />
      ))}

      {/* Botones de paginación */}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(countryData.length / countriesPerPage)}//deshabilita el boton cuando llega a la ultima pagina 
        >
          Next
        </button>
      </div>
    </div>
  );
}



