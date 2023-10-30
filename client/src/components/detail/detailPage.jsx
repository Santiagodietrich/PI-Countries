
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import {useSelector} from "react-redux"

export default function Detail() {//me traigo id por params y creo mi estado inicial
    const { id } = useParams();
    const [paises, setPaises] = useState({}); // Usamos destructuración de arrays aquí
    const countries=useSelector((state)=>state.countries)

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`) //monto el componente y hago una peticion a la api pidiendo el dato id de todos los paises
            .then(({ data }) => {
                console.log(data)
                if (data.name) {//
                    setPaises(data);
                } else {
                    window.alert('No hay países con ese ID');
                }
            })
            .catch((error) => {
                console.error(error);
                window.alert('Error al obtener los detalles del país');
            });
    }, [id]);
        // console.log(paises)
    return (
    <div>
            {paises.name && (
                <div className={styles.card}>
                     
                        <div className={styles.pais}>
                        <img className={styles.bandera}src={paises.flags} alt='Imagen no encontrada' />
                        </div>
                        <div className={styles.container}>
                        <div className={styles.box}>
                        <h2>{paises.name}</h2>
                        <p><b>ID:</b> {paises.id}</p>
                        <p><b>Nombre:</b> {paises.name}</p>
                        <p><b>Continente:</b> {paises.continents}</p>
                        {/* <p><b>Capital:</b> {paises.capital}</p> */}
                        <p><b>Subregión:</b> {paises.subregion}</p>
                        <p><b>Área:</b> {paises.area}</p>
                        <p><b>Población:</b> {paises.population}</p>
                        <div className={styles.act}>
                        <p><b>Activities:</b></p>
                        {paises.Activities && (
                        <ul className={styles.actividades}>
                            {paises.Activities.map((activity) => (
                            <li key={activity.id}>
                            <b>Name:</b> {activity.name} - <b>Dificultad:</b> {activity.dificulty} - <b>Duración:</b> {activity.duration} minutos - <b>Temporada:</b> {activity.season}
                            </li>
                            ))}
                        </ul>
                        )}
                        </div>
                    </div>
                    </div>
                    </div>
            )}
        </div> 
        
//     <div className={styles.card}>
//     <div className={styles.container}>
//         <div className={styles.pais}>
//             <img className={styles.bandera}src={paises.flags} alt='Imagen no encontrada' />
//         </div>
//         <div className={styles.paisInfo}>
//             <h2>{paises.name}</h2>
//             <p><b>ID:</b> {paises.id}</p>
//             <p><b>Nombre:</b> {paises.name}</p>
//             <p><b>Continente:</b> {paises.continents}</p>
//             <p><b>Subregión:</b> {paises.subregion}</p>
//             <p><b>Área:</b> {paises.area}</p>
//             <p><b>Población:</b> {paises.population}</p>
//         </div>
//     </div>
//     <div className={styles.actividades}>
//         <p><b>Activities</b></p>
//         {paises.Activities && (
//             <ul className={styles.actividadesList}>
//                 {paises.Activities.map((activity) => (
//                     <li key={activity.id}>
//                         <b>Name:</b> {activity.name} - <b>Dificultad:</b> {activity.dificulty} - <b>Duración:</b> {activity.duration} minutos - <b>Temporada:</b> {activity.season}
//                     </li>
//                 ))}
//             </ul>
//         )}
//     </div>
// </div>



    );
}

