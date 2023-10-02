export const FILTER_CONTINENTS="FILTER_CONTINENTS";
export const ORDER_BYNAME="ORDER_BYNAME";
export const FILTER_ACTIVITIES="FILTER_ACTIVITIES";
export const TRAER_PAIS="TRAER_PAIS";
export const ORDER_BYPOPULATION="ORDER_BYPOPULATION";
export const CREATE_ACTIVITY="CREATE_ACTIVITY";
import axios from "axios"




export const traer_pais=(allCountries)=>{
    
    return{
        type:TRAER_PAIS,
        payload:allCountries
        
    }
}

export const filter_continents=(continents)=>{
    return{
        type:FILTER_CONTINENTS,
        payload:continents

    }
}

export const filter_activities=(activity)=>{
    return{
        type:FILTER_ACTIVITIES,
        payload:activity
    }
}

// export const order_byName=()=>{
//     return{
//         type:ORDER_BYNAME
        
//     }
// }

export const order_byName = () => {
    return {
        type: ORDER_BYNAME,
         
    };
};


export const order_byPopulation=(population)=>{
    return{
        type:ORDER_BYPOPULATION,
        payload:population
    }
}

export function createAct(input){
    return async function(dispatch){
        
         await axios.post("http://localhost:3001/activities", input)
        return dispatch({type:CREATE_ACTIVITY,payload:input})
    }
}




