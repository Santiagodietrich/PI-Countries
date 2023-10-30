
const axios = require("axios");
const { Country } = require("../db");

const URL = "http://localhost:5000/countries";
const numeroCards=12

const allCountries = async (req, res) => {
  try {
        const response = await axios.get(URL);

        if (response.status === 200) {
            const paises = response.data;

            const countriesDt= paises.map((country)=>{
                return{
                    id:country.cca3,
                    name:country.name.common ,
                    flags: country.flags.png,
                    continents: country.continents[0],
                    // capital:typeof country.capital === 'string' ? country.capital : '',
                    area: country.area,
                    population: country.population,
                    subregion: country.subregion  
                }  
            })   
            
            for (const countryData of countriesDt) {
                const { id,name, flags, capital, continents, area, population, subregion } = countryData;
        
               const crear= await Country.findOrCreate({
                  where: { id }, // Condiciones de búsqueda
                  defaults: {
                    id,
                    name,
                    flags,
                    capital,
                    continents,
                    area,
                    population,
                    subregion,
                  }, // Valores a crear si no se encuentra el registro
                });
                
              }
              
        
              // Responde con la lista de países obtenidos de la API
              res.status(200).json(countriesDt);
            }
        }     
     catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

 module.exports = allCountries
