import axios from "axios"

export default function Form(){
    const[countries,setCountries]=useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get("http://localhost:3001/countries");
            setCountries(response.data);
          } catch (error) {
            console.error("Error fetching countries:", error);
          }
        };
    
        fetchCountries();
      }, []);

    

    return(
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <input className={styles.inputUno} required="true" placeholder="Nombre" type="text" name="name" value={""} onChange={handleChange}></input>
                <span className={styles.primerSpan}>{""}</span>
            </div>
            <div className={styles.dificultyInput}>
                <input className={styles.inputDos} required="true" placeholder="Dificultad" type="number" name="dificulty" value={""} onChange={handleChange}></input>
                <span className={styles.segundoSpan}>{""}</span>
            </div>
            <div className={styles.durationInput}>
                <input className={styles.inputTres} required="true" placeholder="Duracion" type="number" name="duration" value={""} onChange={handleChange}></input>
                <span className={styles.tercerSpan}>{""}</span>
            </div>
            <div className={styles.seasonInput}>
                <input className={styles.inputCuatro} required="true" placeholder="Temporada" type="text" name="season" value={""} onChange={handleChange}></input>
                <span className={styles.cuartoSpan}>{""}</span>
            </div>
            <div className={styles.crearActBoton}>
                <button className={styles.crear} type="submit">Crear</button>
            </div>
            <div>
        <label htmlFor="countries">Países:</label>
        <select
          id="countries"
          name="countries"
          multiple
          onChange={handleCountryChange}
          value={selectedCountries}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
        </form>
    )
}