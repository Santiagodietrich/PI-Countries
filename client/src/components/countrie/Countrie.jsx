import {Link} from "react-router-dom"


export default function Countrie({id,name,flags,continents,capital,subregion,area,population}){

    return (

        <div>
      <div>
      <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{continents}</h2>
         <h2>{capital}</h2>
         </div>
         <div>
         <img src={flags} alt={`No se encuentra la imagen de ${name}`} />
         </div>
         </div> 


    )

}