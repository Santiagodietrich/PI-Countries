import SearchBar from '../searchBar/SearchBar'
import {Link} from "react-router-dom"
import styles from './Nav.module.css'

export default function Navbar ({onSearch}){
    return(
        <div className={styles.navegacion}>
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ul className={styles.botonHome}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          </ul>
          <ul className={styles.botonForm}>
          <li>
            <Link to="/form">Form</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
        </nav>
        </div>
    )

}
