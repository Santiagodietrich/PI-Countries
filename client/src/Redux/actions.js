export const FILTER_CONTINENTS="FILTER_CONTINENTS";
export const ORDER_BYNAME="ORDER_BYNAME";
export const TRAER_PAIS="TRAER_PAIS";
export const ORDER_BYPOPULATION="ORDER_BYPOPULATION";
export const CREATE_ACTIVITY="CREATE_ACTIVITY";
export const GET_ACTIVITIES="GET_ACTIVITIES";
export const FILTER_ACTIVITIES="FILTER_ACTIVITIES"

import axios from "axios"




export const traer_pais=()=>{
    return async function(dispatch){
        let json=await axios.get("http://localhost:3001/countries")
            return dispatch({
                type:TRAER_PAIS,
                payload:json.data
            })
    }
    
}


export const filter_continents=(continents)=>{
   
    return{
        type:FILTER_CONTINENTS,
        payload:continents

    }
}




export const filter_activities = (payload) => {
  return {
    type: FILTER_ACTIVITIES,
    payload,
  };
};



export function get_activities() {
  return async function (dispatch) {
    try {
      const activities = await axios.get("http://localhost:3001/activities/activity");

      return dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}





export const order_byName = (name) => {
    return {
        type: ORDER_BYNAME,
         payload:name
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




