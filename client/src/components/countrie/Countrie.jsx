import {Link} from "react-router-dom"
import styles from "./Countrie.module.css"


export default function Countrie({id,name,flags,continents,capital,subregion,area,population}){

    return (

        <div>
      <div className={styles.card}>
      <div className={styles.cardOverlay}></div>
        <div className={styles.cardInner}></div>
        <h2 className={styles.pais}>Pais: </h2>
      <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <h2 className={styles.continente}>Continente: </h2>
         <h2>{continents}</h2>
         {/* <h2>{capital}</h2> */}
         
         <div>
         <img className={styles.bandera} src={flags} alt={`No se encuentra la imagen de ${name}`} />
         </div>
         </div>
         </div> 


    )

}



