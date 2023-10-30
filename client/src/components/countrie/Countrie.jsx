import {Link} from "react-router-dom"
import styles from "./Countrie.module.css"


export default function Countrie({id,name,flags,continents,activities}){

    return (

      <div className={styles.card}>
      <div>
      <div className={styles.cardDetail}>
        <h2 className={styles.pais}>Pais:</h2>
        <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <h2 className={styles.continente}>Continente:</h2>
        <h2>{continents}</h2>
      </div>
         <div>
          <img className={styles.bandera} src={flags} alt={`No se encuentra la imagen de ${name}`} />
         </div>
         </div>
         </div> 


    )

}
//en esta funcion mediante destructuring me traigo las propiedades de countries que voy a renderizar
  
//indico que sobre el nombre del pais va a haber un link que me va a redirigir mediante la ruta /:id al detalle del pais usando la propiedad name
//renderizo la bandera especifica del pais trayendo la propiedad de su bandera y de su nombre