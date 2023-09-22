import { useState } from "react";
import styles from "../searchBar/SearchBar.module.css"

export default function Search ({onSearch}){
    const [name,setName]=useState("")//[estado,actualizacion del estado]=estado inicial
    const handleChange=(event)=>{
        let value=event.target.value//captura el valor ingresado,evento, y lo trae
        setName(value)//actualiza tomando el nuevo valor (value)
    }

    return(
        <div>
            <input placeholder="Enter your countrie..." className={styles.input} onChange={handleChange} value={name} type="search" ></input>
            <button  className={styles.button} onClick={()=> onSearch(name)}>Agregar</button>
        </div>

    )
    
}