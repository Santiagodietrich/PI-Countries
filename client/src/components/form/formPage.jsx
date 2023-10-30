import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./formPage.module.css"
import Validation from "./validation"
import { traer_pais} from "../../Redux/actions";
import {useDispatch, useSelector } from "react-redux";
import Filtros from "../filtros/filtros";


export default function Form(){

const dispatch=useDispatch()
const inicialForm={
      name:'',
      dificulty:0,
      duration:0.0,
      season:'',
      countries:[]
    }
    const[lugares,setLugares]=useState(inicialForm);
    console.log(lugares)
    const[nombre,setNombre]=useState("");
    const ciudades=useSelector((state)=>state.countries)
    const [activities, setActivities] = useState([])
    const act= useSelector((state)=> state.activi)
    
    console.log(lugares)
    
  useEffect(() => {//monta el componente 
    dispatch(traer_pais())
  },[dispatch]);

      const[errors,setErrors]=useState({});


    function handleName(e) {
        const inputValue = e.target.value;
        setNombre(inputValue);
    
        const validationErrors = Validation({ ...lugares, name: inputValue });//verifica que sea string y lo actualiza en el estado
        setErrors(validationErrors);
    
        setLugares({
            ...lugares,
            name: nombre, // Agrega el valor de nombre a la propiedad name
            [e.target.name]: e.target.value,
        });
    
    }

    function handleSeason(e){
        // setLugares({...lugares,season:e.target.value})
        const inputValue = e.target.value;
        setLugares({ ...lugares, season: inputValue });
    
        const validationErrors = Validation({ ...lugares, season: inputValue });
        setErrors(validationErrors);
    }

   

    function handleDuration(e) {
    const inputValue = e.target.value;
    setLugares({ ...lugares, duration: parseFloat(inputValue) });

    const validationErrors = Validation({ ...lugares, duration: inputValue });
    setErrors(validationErrors);
        
    }


    function handleDificultad(e) {
    const inputValue = e.target.value;
    setLugares({ ...lugares, dificulty: parseInt(inputValue) });

    const validationErrors = Validation({ ...lugares, dificulty: inputValue });
    setErrors(validationErrors);
    }
    

        
    const [selectedPais, setSelectedPais]= useState([])
    function handleChange(event) {
        const pais = event.target.value;
        const checked = event.target.checked;
        
        if (checked) {
            setSelectedPais([...selectedPais, pais]); // Agrega los paises seleccionados al array
        } else {
            setSelectedPais(selectedPais.filter((p) => p !== pais)); // Elimina del array los paises
        }
    }

    //seleccionar países
    function handleSelect(e) {
        const valor = e.target.value
        const id = ciudades.find(e=> {
            if(e.name === valor){
                return e.id
            }
            
        })
        if(lugares.countries.includes(id.id)){
            alert('ya seleccionaste este País')
        }else{
            setLugares({
                ...lugares,
                countries: [...lugares.countries, id.id]
            })
        }
    }
    

    //   const handleSubmit = async(event)=>{
    //     event.preventDefault()
    //     const updatedData = { countries: selectedPais, ...lugares }
    //     setLugares([updatedData])
    //         try{
    //             await axios.post(`http://localhost:3001/activities`, updatedData) 
    //         }catch(error){
    //         window.alert("Error al crear la actividad")
    //     }
    //     setActivities((prevActivities) => [
    //         ...prevActivities,
    //         { name: lugares.name }
    //       ]);
     
    
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedData = { countries: selectedPais, ...lugares };
      
        try {
          await axios.post(`http://localhost:3001/activities`, updatedData);
      
          // Asumiendo que la respuesta del servidor tiene un campo 'name'
          const newActivity = { name: lugares.name };
      
          // Agregamos la nueva actividad al estado 'activities'
          setActivities((prevActivities) => [...prevActivities, newActivity]);
        } catch (error) {
          window.alert("Error al crear la actividad");
        }
      }


      
    return(
        
        <div className={styles.formContainer}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <label htmlFor="Nombre">Nombre</label>
                <input className={styles.inputUno}  placeholder="Nombre" type="text" name="name" value={nombre} onChange={handleName}></input>
                <span className={styles.primerSpan}>{errors.name}</span>
            </div>
            <div className={styles.dificultyInput}>
                <label htmlFor="Dificulty">Dificultad</label>
                <input className={styles.inputDos}  placeholder="Dificulty" type="number" name="Dificulty" value={lugares.dificulty} onChange={handleDificultad}></input>
                <span className={styles.segundoSpan}>{errors.dificulty}</span>
            </div>
           
            <div className={styles.durationInput}>
                <label htmlFor="Duracion">Duration</label>
                <input className={styles.inputTres}  placeholder="Duracion" type="number" name="Duracion" value={lugares.duration} onChange={handleDuration}></input>
                <span className={styles.tercerSpan}>{errors.duration}</span>
            </div>
            <div className={styles.seasonInput}>
                <label clasname={styles.labelSeason} htmlFor="Temporada">Temporada</label>
                <input className={styles.inputCuatro}  placeholder="Temporada" type="text" name="Temporada" value={lugares.season} onChange={handleSeason}></input>
                <span className={styles.cuartoSpan}>{errors.season}</span>
            </div>

            <div>
            <label htmlFor="seleccionar">Seleccionar País:</label>
                    <select className={styles.select} id="seleccionar" onChange={handleSelect} required>
                      
                        {ciudades.map(e => (
                            <option key={e.name} value={e.name}>{e.name}</option>
                        ))}
                    </select>
            </div>
            

             
           
            <div className={styles.crearActBoton}>
                <button className={styles.crear} type="submit">Crear</button>
            </div> 
            
                
        </form>
        </div>
    )
}


