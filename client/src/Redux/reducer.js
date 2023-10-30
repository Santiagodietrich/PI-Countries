import { GET_ACTIVITIES,FILTER_CONTINENTS,TRAER_PAIS,ORDER_BYNAME, ORDER_BYPOPULATION, FILTER_ACTIVITIES } from "./actions";
const initialState={
    //  allCountries:[],
    filtered:[],
    countries:[],
    actividad:[],
    allActividades:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

    case TRAER_PAIS:

            return{...state,countries:action.payload,filtered:action.payload}



    case GET_ACTIVITIES:

        return {...state,actividad:action.payload,allActividades:action.payload}


    case FILTER_ACTIVITIES:
        const activities = state.actividad;
        const paisesFiltrados = activities.filter((activities) => {
          return activities.name === action.payload
        });
        console.log("actividadCreada",paisesFiltrados[0])
        if (action.payload === "All") {
          return {
            ...state,
            countries: state.filtered,
          };
        } else {
          return {
            ...state,
            countries: paisesFiltrados[0].Countries};
            
        }
        


    case FILTER_CONTINENTS:
            const filtro=state.countries.filter((e)=>e.continents === action.payload)
            return{...state,filtered:filtro}

    case ORDER_BYNAME:
            let sortedCountries;
            console.log(state.countries)
            if (action.payload === 'Descendente') {
                sortedCountries = [...state.filtered].sort((a, b) => b.name.localeCompare(a.name));
            } else {
                sortedCountries = [...state.filtered].sort((a, b) => a.name.localeCompare(b.name));
            }

            return { ...state, filtered: sortedCountries };

    case ORDER_BYPOPULATION:
            let paisesOrdenados;
            console.log(state.countries)
                if (action.payload === "Ascendente") {
                    paisesOrdenados = [...state.filtered].sort((a, b) => a.population - b.population);
                } else {
                    paisesOrdenados = [...state.filtered].sort((a, b) => b.population - a.population);
                }
                return { ...state, filtered: paisesOrdenados };


        default:
            return {...state }
    }
}

export default reducer


