import { FILTER_ACTIVITIES,FILTER_CONTINENTS,TRAER_PAIS,ORDER_ASC,ORDER_DESC } from "./actions";
const initialState={
    currentCountries:[],
    filteredContinents:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case TRAER_PAIS:
            console.log(action.payload)
            return{...state,currentCountries:action.payload,filteredContinents:action.payload}

        case FILTER_ACTIVITIES: 
            const filterAct = action.payload.trim();
            console.log(action.payload)
      if (filterAct === "") {
        return { ...state, filteredContinents: state.currentCountries };
      } else {
        const filteredActivities = state.currentCountries.filter((act) =>
          act.activities.includes(filterAct)
        );
        return { ...state, filteredContinents: filteredActivities };
      }
   

            case FILTER_CONTINENTS: 
                const filtro = action.payload.trim();// convierte los nombres en letras minúsculas y elimina espacios en blanco al principio y al final

                    if (filtro === "") {
                        // Si el filtro está vacío, mostrar todos los países nuevamente
                        return { ...state, filteredContinents: state.currentCountries };
                    } else {
                        // Filtrar países por continente
                        const filteredCountries = state.currentCountries.filter((country) =>
                        country.filteredContinents.includes(filtro)
                        );
                        return { ...state, filteredContinents: filteredCountries };
                    }


           



              
        
        case ORDER_ASC:
            const ordenAscd=[...state.filteredContinents].sort((a, b) =>a.id - b.id);
            
            return{...state, filteredContinents:ordenAscd }; //Ordenar ascendentemente
            
            
        case ORDER_DESC:
           const ordenDscd=[...state.filteredContinents].sort(
            (a, b) => b.id - a.id
           );
           return{...state, filteredContinents:ordenDscd };//Ordenar descendentemente

        default:
            return state 
    }
}

export default reducer


