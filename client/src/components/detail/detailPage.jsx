
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Detail.module.css"

export default function Detail() {
    const { id } = useParams();
    const [paises, setPaises] = useState({}); // Usamos destructuración de arrays aquí

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`) // Agrega http:// en la URL
            .then(({ data }) => {
                console.log(data)
                if (data.name) {
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
        console.log(paises)
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
                        <p><b>Capital:</b> {paises.capital}</p>
                        <p><b>Subregión:</b> {paises.subregion}</p>
                        <p><b>Área:</b> {paises.area}</p>
                        <p><b>Población:</b> {paises.population}</p>
                    </div>
                    </div>
                    </div>

                // </div>
            )}
        </div> 
        
    );
}




{/* */}