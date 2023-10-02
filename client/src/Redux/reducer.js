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
            const filterAct = action.payload.trim();
            console.log(action.payload)
      if (filterAct === "") {
        return { ...state, filteredContinents: state.allCountries };
      } else {
        const filteredActivities = state.allCountries.filter((act) =>
          act.activities.includes(filterAct)
        );
        return { ...state, filteredContinents: filteredActivities };
      }
   

        case FILTER_CONTINENTS: 
            const filtro=state.allCountries.filter((e)=>e.continents === action.payload)
            return{...state,countries:filtro}


        // case ORDER_BYNAME:
            
        //     const ordenAscd=action.payload === "A-Z" ? [...state.countries].sort((a, b) =>{//ORDEN ASCENDENTE!!!!!!
        //         if(a.name > b.name){//A=Mexico,B=Argentina, debe ordenarse B por delante de A por su letra inicial(posicion en el abecedario)
        //             return 1
        //         }
        //         if(b.name > a.name){//B=Peru,A=Brasil, debe ordenarse A por delante de B por su letra inicial(posicion en el abecedario)
        //             return -1
        //         }
        //         return 0 //no necesito cambiar el orden porque ambos paises comienzan con la misma letra
        //     }):
        //     [...state.countries].sort((a, b) =>{//ORDEN DESCENDENTE!!!!!!!
        //         if(a.name > b.name){
        //             return -1
        //         }
        //         if(b.name > a.name){
        //             return 1
        //         }
        //         return 0 
        //     })
        //     return{...state,countries:ordenAscd};
            
      
    //     case ORDER_BYNAME:
    // let ordenAscd = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
    // let ordenDscd = [...state.countries].sort((a, b) => b.name.localeCompare(a.name));
    // if (action.payload === "Z-A") {
    //     ordenAscd.reverse();
    // }else if(action.payload === "A-Z"){
    //     ordenDscd.reverse();
    // }

    
    // return { ...state, countries: ordenAscd,ordenDscd};


    case ORDER_BYNAME:
    let sortedCountries;

    if (action.payload === 'Z-A') {
        sortedCountries = [...state.countries].sort((a, b) => b.name.localeCompare(a.name));
    } else {
        sortedCountries = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
    }

    return { ...state, countries: sortedCountries };

    


    // case ORDER_BYNAME:
    // let sortedCountries;
    
    // if (action.payload === 'Z-A') {
    //     sortedCountries = [...state.countries].sort((a, b) => b.name.localeCompare(a.name));
    // } else {
    //     sortedCountries = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
    // }
    
    // return { ...state, countries: sortedCountries };




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


