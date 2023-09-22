import mapa from '../../assets/pngwing.com.png'

import styles from './landingPage.module.css'
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <div className={styles.landing}>
            <h1 className={styles.titulo}>¡Bienvenidos a un viaje por el mundo!</h1>
            
            <img className={styles.paises} src={mapa} alt="paises" />
                <button className={styles.boton}>
                    <Link to={"/home"}>
                    ¡Comencemos!
                    </Link>
                </button>
        </div>
    );
};
