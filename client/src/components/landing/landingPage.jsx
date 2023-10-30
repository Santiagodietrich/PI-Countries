import telefono from '../../assets/pngegg.png'
import styles from './landingPage.module.css'
import {Link} from 'react-router-dom'

export default function LandingPage(){//creo la funcion landing donde va a estar todo lo que quiero renderizar en mi landingpage
    return(
        
        <div className={styles.landing}>
            <h2 className={styles.titulo}>App Countries</h2>
             <img className={styles.celular} src={telefono} alt="paises" /> 
                 <button className={styles.boton}>
                    <Link to={"/home"}>
                    Sing in
                    </Link>
                </button>
                
        </div>
        
    );
    
};
//uso una imagen png que la inserto por arriba de la background image
//creo un boton donde al hacer click me rediriga a home






