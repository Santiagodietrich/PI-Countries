import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./formPage.module.css"
import validation from "./validation"
import { createAct } from "../../Redux/actions";
import {useDispatch, useSelector } from "react-redux";


export default function Form(){


    const inicialForm={
      name:'',
      dificulty:0,
      duration:0.0,
      season:'',
      countries:[]
    }
    const[lugares,setLugares]=useState(inicialForm);
    const[nombre,setNombre]=useState("");
    // const[duracion,setDuracion]=useState("");
    // const[dificultad,setDificultad]=useState("");
    console.log(lugares)

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get("http://localhost:3001/countries");
            setLugares(response.data);
          } catch (error) {
            console.error("Error fetching countries:", error);
          }
        };
    
        fetchCountries();
      }, []);

      const[errors,setErrors]=useState({});

      function handleBlur(e) {
        if (e.target.value === '') {
            setErrors({});
        }
        
        setLugares({
            ...lugares,
            name: nombre, // Agrega el valor de nombre a la propiedad name
            [e.target.name]: e.target.value,
        });
    
    }

    function handleSeason(e){
        setLugares({...lugares,season:e.target.value})
    }

   

    function handleDuration(e) {
        const durationValue = parseFloat(e.target.value); // Convertir a número entero
    
        setLugares({
            ...lugares,
            duration: durationValue
        });
    }


    function handleDificultad(e) {
        const dificultyValue = parseInt(e.target.value); // Convertir a número entero
    
        setLugares({
            ...lugares,
            dificulty: dificultyValue
        });
    }
    const [selectedValues, setSelectedValues] = useState([])
    function handleChange(event) {
        const options = event.target.options;
        const selectedValues = [];
      
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedValues.push(options[i].value);
          }
        }
      
        setSelectedOptions(selectedValues);
        console.log("hola",selectedValues)
      
        // Actualizamos el estado solo con las countries seleccionadas
        setLugares((prevLugares) => ({
          ...prevLugares,
          countries: selectedValues,
        }));
    }
    
    //   const[selectedCountry,setSelectedCountry]=useState([])
    //   const handleChangeSelect=(event)=>{
    //     const pais=event.target.value
    //     const checked=event.target.checked

    //     if(checked){
    //         setSelectedCountry([pais,...selectedCountry])
    //         console.log(selectedCountry)
    //     }else{
    //         setSelectedCountry(selectedCountry.filter((c)=>c !== pais))
    //     }
    //   }

    //   const handleSubmit = async(event)=>{
    //     event.preventDefault()
    //     // const updatedData = { countries: selectedCountry, ...lugares }
    //     // console.log("hola",updatedData)
    //     setLugares({...lugares, countries:selectedCountry, [event.target.name]:event.target.value})
    //     // try{
    //     //     await axios.post(`http://localhost:3001/activities`, lugares) 
    //     // }catch(error){
    //     //    window.alert("Error al crear la actividad")
    //     // }
    //     dispatch(createAct(lugares))
    //         // setLugares({
    //         //     name: "",
    //         //     dificulty: 0,
    //         //     duration: 0.0,
    //         //     season: "",
    //         //     countries: []
    //         // })
    // }
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // setLugares({...lugares, countries:selectedCountry, [event.target.name]:event.target.value})
        const payload = {
          name: lugares.name,
          difficulty: lugares.dificulty,
          duration: lugares.duration,
          season: lugares.season,
          countries: selectedValues,
        };
      
        try {
          await axios.post('http://localhost:3001/activities', payload);
        } catch (error) {
          console.error('Error al crear la actividad:', error);
        }
    };
      
    return(
        <div className={styles.formContainer}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <input className={styles.inputUno}  placeholder="Nombre" type="text" name="name" value={nombre} onChange={handleBlur}></input>
                <span className={styles.primerSpan}>{errors.name}</span>
            </div>
            <div>
                <label htmlFor="Dificulty">Dificultad</label>
                <select type="number" id="Dificulty" onChange={handleDificultad} value={lugares.dificulty} name="Dificulty">
                    <option >Seleccionar</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
            </div>
            <div>
                <label htmlFor="Countries">Paises</label>
                <select type="string" id="Countries" multiple={true} onChange={handleChange} value={lugares.countries} name="Countries">
                    <option >Seleccionar</option>
                    <option >Argentina</option>
                    <option >Kenya</option>
                    <option >San Marino</option>
                    <option >Brazil</option>
                    <option >Japan</option>
                    <option >Mexico</option>
                    <option >Antartica</option>
                    <option >Francia</option>
                    <option >Russia</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="Duracion">Duration</label>
                <select type= "number" id="Duracion" onChange={handleDuration}>
                    <option >Seleccionar</option>
                    <option>60.30</option>
                    <option>25.30</option>
                    <option>10.30</option>
                    <option>70.30</option>
                </select>
            </div>
            <div>
                <label htmlFor="Temporada">Temporada</label>
                <select id="Temporada" onChange={handleSeason}>
                    <option >Seleccionar</option>
                    <option value="Verano">Verano</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Primavera">Primavera</option>
                </select>
            </div>
           
            <div className={styles.crearActBoton}>
                <button className={styles.crear} type="submit">Crear</button>
            </div>
            {/* <div className={styles.checkboxContainer}>
            <label className={styles.container} for="type 1">
                <input type="checkbox" defaultChecked={false} value= "Kenya" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkUno}></div>
                Kenya
            </label>
            <label className={styles.container} for="type 2">
                <input type="checkbox" defaultChecked={false} value= "San Marino" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkDos}></div>
                San Marino
            </label>
            <label className={styles.container} for="type 3">
                <input type="checkbox" defaultChecked={false} value= "Argentina" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkTres}></div>
                Argentina
            </label>
            <label className={styles.container} for="type 4">
                <input type="checkbox" defaultChecked={false} value= "Nigeria" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkCuatro}></div>
                Nigeria
            </label> <label className={styles.container} for="type 5">
                <input type="checkbox" defaultChecked={false} value= "Brazil" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkCinco}></div>
                Brazil
            </label> <label className={styles.container} for="type 6">
                <input type="checkbox" defaultChecked={false} value= "Japan" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkSeis}></div>
                Japan
            </label>
            <label className={styles.container} for="type 7">
                <input type="checkbox" defaultChecked={false} value= "Mexico" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkSiete}></div>
                Mexico
            </label>
            <label className={styles.container} for="type 8">
                <input type="checkbox" defaultChecked={false} value= "Antartica" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkOcho}></div>
                Antartica
            </label>
            <label className={styles.container} for="type 9">
                <input type="checkbox" defaultChecked={false} value= "Francia" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkNueve}></div>
                Francia
            </label>
            <label className={styles.container} for="type 10">
                <input type="checkbox" defaultChecked={false} value= "Russia" onChange={handleChangeSelect}></input>
                <div className={styles.checkmarkDiez}></div>
                Russia
            </label>
            </div> */} 


                {/* <div>
                    <label htmlFor="seleccionar">Seleccionar País:</label>
                    <select className={styles.select} id="seleccionar" onChange={handleSelect} required>
                      
                        {count.map(e => (
                            <option key={e.name} value={e.name}>{e.name}</option>
                        ))}
                    </select>
                    <div className={styles.paises}>
                    {lugares.countries.map(el =>
                        (<div className={styles.pais} key={el}>
                            <p >{el}</p>
                            <button className={styles.button}onClick={()=>handleDelete(el)}>✖️</button>
                            </div>
                        ))}
                    </div>
                  
                </div> */}
                
        </form>
        </div>
    )
}