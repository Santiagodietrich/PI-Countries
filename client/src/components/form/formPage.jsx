import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./formPage.module.css"
import validation from "./validation"
import { createAct } from "../../Redux/actions";
import {useDispatch, useSelector } from "react-redux";


export default function Form(){


    const inicialForm={
      name:'',
      dificulty:'',
      duration:0,
      season:'',
      countries:[]
    }
    const[lugares,setLugares]=useState(inicialForm);
    const[name,setName]=useState("");
    const[duration,setDuration]=useState("");
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.allCountries)
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
        e.target.value === ''&& setErrors({})
        setLugares({
            ...lugares,
            [e.target.name]: e.target.value,
        })
    }

    function handleSeason(e){
        setLugares({...lugares,season:e.target.value})
    }

      const[selectedCountry,setSelectedCountry]=useState([])
      const handleChangeSelect=(event)=>{
        const pais=event.target.value
        const checked=event.target.checked

        if(checked){
            setSelectedCountry([pais,...selectedCountry])
            console.log(selectedCountry)
        }else{
            setSelectedCountry(selectedCountry.filter((c)=>c !== pais))
        }
      }

      const handleSubmit = async(event)=>{
        event.preventDefault()
        const updatedData = { countries: selectedCountry, ...lugares }
        console.log("hola",updatedData)
        setLugares([updatedData])
        try{
            await axios.post(`http://localhost:3001/activities`, updatedData) 
        }catch(error){
           window.alert("Error al crear la actividad")
        }
    }


    // function handleSelect(e) {
    //     const valor = e.target.value
    //     const id = count.find(e=> {
    //         if(e.name === valor){
    //             return e.id
    //         }
    //     })
    //     if(lugares.countries.includes(id.id)){
    //         alert('ya seleccionaste este País')
    //     }else{
    //         setLugares({
    //             ...lugares,
    //             countries: [...lugares.countries, id.id]
    //         })
    //     }
    // }

    // function handleDelete (e){
    //     console.log(e);
    //    // const id = e.target.innerText
    //     setActivity({
    //         ...activity,
    //         country: activity.country.filter(el => el !== e)
    //     })
    // }
    

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if (
    //         lugares.name !== "" &&
    //         lugares.duration !== "" &&
    //         lugares.countries.length !== 0 &&
    //         lugares.season !== "" &&
    //         lugares.dificulty !== ""
    //     ) {
    //         setErrors(false)
    //         dispatch(createAct(lugares))
    //         setLugares({
    //             name: "",
    //             dificulty: "",
    //             duration: "",
    //             season: "",
    //             countries: []
    //         })
    //         alert('Actividad Creada')
            
    //     } else {
    //         setErrors(true)
    //     }

    // }


     

    return(
        <div className={styles.formContainer}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <input className={styles.inputUno}  placeholder="Nombre" type="text" name="name" value={lugares.name} onChange={(e)=>setName(e.target.value)}></input>
                <span className={styles.primerSpan}>{errors.name}</span>
            </div>
            <div>
                <label htmlFor="Dificulty">Dificultad</label>
                <select id="Dificulty" onChange={handleBlur} value={lugares.dificulty} name="Dificulty">
                    <option >Seleccionar</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
            </div>
            
            <div className={styles.durationInput}>
                <input className={styles.inputTres}  placeholder="Duracion" type="number" name="duration" value={lugares.duration} onChange={(e)=>setDuration(e.target.value)} step="0.01"></input>
                <span className={styles.tercerSpan}>{errors.duration}</span>
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
            <div className={styles.checkboxContainer}>
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
            </div>


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