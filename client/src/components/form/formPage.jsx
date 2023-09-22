
export default function Form(){

    return(
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.nameInput}>
                <input className={styles.inputUno} required="true" placeholder="Nombre" type="text" name="name" value={""} onChange={handleChange}></input>
                <span className={styles.primerSpan}>{""}</span>
            </div>
            <div className={styles.dificultyInput}>
                <input className={styles.inputDos} required="true" placeholder="Dificultad" type="number" name="dificulty" value={""} onChange={handleChange}></input>
                <span className={styles.segundoSpan}>{""}</span>
            </div>
            <div className={styles.durationInput}>
                <input className={styles.inputTres} required="true" placeholder="Duracion" type="number" name="duration" value={""} onChange={handleChange}></input>
                <span className={styles.tercerSpan}>{""}</span>
            </div>
            <div className={styles.seasonInput}>
                <input className={styles.inputCuatro} required="true" placeholder="Temporada" type="text" name="season" value={""} onChange={handleChange}></input>
                <span className={styles.cuartoSpan}>{""}</span>
            </div>
            <div className={styles.crearActBoton}>
                <button className={styles.crear} type="submit">Crear</button>

            </div>
        </form>
    )
}