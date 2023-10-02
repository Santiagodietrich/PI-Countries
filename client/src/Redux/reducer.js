import { FILTER_ACTIVITIES,FILTER_CONTINENTS,TRAER_PAIS,ORDER_BYNAME, ORDER_BYPOPULATION,CREATE_ACTIVITY } from "./actions";
const initialState={
    allCountries:[],
    filteredContinents:[],
    countries:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case TRAER_PAIS:
            
            return{...state,allCountries:action.payload,filteredContinents:action.payload,countries:action.payload}


   
    case FILTER_ACTIVITIES:
            let countryFilter = action.payload
            let mensajeError = [{id:1,
                 error: 'Ningún país tiene esa actividad',
                 img: img}]
            let hayOno = countryFilter.length !== 0 ? action.payload : mensajeError
            return {
                ...state,
                countries: hayOno
            }
   

    case FILTER_CONTINENTS: 
            const filtro=state.allCountries.filter((e)=>e.continents === action.payload)
            return{...state,countries:filtro}


      


    // case ORDER_BYNAME:
    //         let sortedCountries;

    //         if (action.payload === 'Z-A') {
    //             sortedCountries = [...state.countries].sort((a, b) => b.name.localeCompare(a.name));
    //         } else {
    //             sortedCountries = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
    //         }

    //         return { ...state, countries: sortedCountries };

    case ORDER_BYNAME:
    const sortOrder = action.payload === 'Z-A' ? -1 : 1;

    const sortedCountries = [...state.countries].sort((a, b) =>
        sortOrder * a.name.localeCompare(b.name)
    );

    return { ...state, countries: sortedCountries };

    



    case ORDER_BYPOPULATION:
            let paisesOrdenados;
                if (action.payload === "Ascendente") {
                    paisesOrdenados = [...state.countries].sort((a, b) => a.population - b.population);
                } else {
                    paisesOrdenados = [...state.countries].sort((a, b) => b.population - a.population);
                }
                return { ...state, countries: paisesOrdenados };


    case CREATE_ACTIVITY:
        return{...state}
        

        default:
            return {...state }
    }
}

export default reducer


