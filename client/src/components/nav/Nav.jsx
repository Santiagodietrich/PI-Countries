import SearchBar from '../searchBar/SearchBar'
import {Link} from "react-router-dom"
import styles from './Nav.module.css'

export default function Navbar ({onSearch}){
    return(
      <div className={styles.principal}>
        <div className={styles.menu}>
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ul>
          <button className={styles.botonHome}>
            <Link to="/home"> <svg className={styles.svgIcon }viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
              Home</Link>
          </button>
          </ul>
          <ul>
          <button className={styles.botonForm}>
            <Link to="/form"><svg className={styles.svgIcono }viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
              Crear Actividad</Link>
          </button>
          
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
        </nav>
        </div>
        </div>



    //     <div className={styles.menu}>
    //   <nav>
    //     <SearchBar onSearch={onSearch} />
    //     <ul>
    //       <li>
    //         <button className={styles.botonHome}>
    //           <Link to="/home">
    //             <svg className={styles.svgIcon} viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
    //             </svg>
    //             Home
    //           </Link>
    //         </button>
    //       </li>
    //     </ul>
    //     <ul>
    //       <li>
    //         <button className={styles.botonForm}>
    //           <Link to="/form">
    //             <svg className={styles.svgIcono} viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
    //             </svg>
    //             Crear Actividad
    //           </Link>
    //         </button>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    )

}
