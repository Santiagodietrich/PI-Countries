import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./formPage.module.css"

export default function Form(){
    const inicialForm={
      name:'',
      dificulty:0,
      duration:0,
      season:'',
      countries:[]
    }
    const[countries,setCountries]=useState(inicialForm);
    

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

      const[errors,setErrors]=useState({});

      const handleChange=(event)=>{
        const property=event.target.name;
        const value=event.target.value;
        setErrors(validaton({...countries,[property]:value}));
        setCountries({...countries,[property]:value});
      }

      const[selectedCountry,setSelectedCountry]=useState([])
      const handleChangeSelect=(event)=>{
        const pais=event.target.value
        const checked=event.target.checked

        if(checked){
            setSelectedCountry([...selectedCountry,pais])
        }else{
            setSelectedCountry(selectedCountry.filter((c)=>c !== pais))
        }
      }

      const handleSubmit=async(event)=>{
        event.preventDefault();
        const datos={...countries,pais:selectedCountry}
        try{
            await axios.post("http://localhost:3001/countries",datos)

        }catch(error){
            window.alert("Error al crear la actividad")
        }
        
      }

     

    return(
        <div className={styles.formContainer}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <input className={styles.inputUno} required="true" placeholder="Nombre" type="text" name="name" value={countries.name} onChange={handleChange}></input>
                <span className={styles.primerSpan}>{errors.name}</span>
            </div>
            <div className={styles.dificultyInput}>
                <input className={styles.inputDos} required="true" placeholder="Dificultad" type="number" name="dificulty" value={countries.dificulty} onChange={handleChange}></input>
                <span className={styles.segundoSpan}>{errors.dificulty}</span>
            </div>
            <div className={styles.durationInput}>
                <input className={styles.inputTres} required="true" placeholder="Duracion" type="number" name="duration" value={countries.duration} onChange={handleChange}></input>
                <span className={styles.tercerSpan}>{errors.duration}</span>
            </div>
            <div className={styles.seasonInput}>
                <input className={styles.inputCuatro} required="true" placeholder="Temporada" type="text" name="season" value={countries.season} onChange={handleChange}></input>
                <span className={styles.cuartoSpan}>{errors.season}</span>
            </div>
            <div className={styles.crearActBoton}>
                <button className={styles.crear} type="submit">Crear</button>
            </div>
            <label className={styles.container} for="type 1">
                <input type="checkbox" defaultChecked={false} value= "Kenya" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Kenya
            </label>
            <label className={styles.container} for="type 2">
                <input type="checkbox" defaultChecked={false} value= "San Marino" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                San Marino
            </label>
            <label className={styles.container} for="type 3">
                <input type="checkbox" defaultChecked={false} value= "Argentina" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Argentina
            </label>
            <label className={styles.container} for="type 4">
                <input type="checkbox" defaultChecked={false} value= "Nigeria" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Nigeria
            </label> <label className={styles.container} for="type 5">
                <input type="checkbox" defaultChecked={false} value= "Brazil" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Brazil
            </label> <label className={styles.container} for="type 6">
                <input type="checkbox" defaultChecked={false} value= "Japan" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Japan
            </label>
            <label className={styles.container} for="type 7">
                <input type="checkbox" defaultChecked={false} value= "Mexico" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Mexico
            </label>
            <label className={styles.container} for="type 8">
                <input type="checkbox" defaultChecked={false} value= "Antartica" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Antartica
            </label>
            <label className={styles.container} for="type 9">
                <input type="checkbox" defaultChecked={false} value= "Francia" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Francia
            </label>
            <label className={styles.container} for="type 10">
                <input type="checkbox" defaultChecked={false} value= "Russia" onChange={handleChangeSelect}></input>
                <div className={styles.checkmark}></div>
                Russia
            </label>
        </form>
        </div>
    )
}