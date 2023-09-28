import mapa from '../../assets/pngegg.png'

import styles from './landingPage.module.css'
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        
        <div className={styles.landing}>
            <h2 className={styles.titulo}>App Countries</h2>
            <h4 className={styles.parrafo}>Explora todos los paises que existen, su informacion y crea actividades para uno o varios de ellos</h4>
             <img className={styles.celular} src={mapa} alt="paises" /> 
                 <button className={styles.boton}>
                    <Link to={"/home"}>
                    Comencemos
                    </Link>
                </button>
                
        </div>
        
    );
    
};








