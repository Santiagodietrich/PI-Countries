const initialState={
    continents:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "FILTER_ACTIVITIES": {
            const filtroActivities = state.continents.filter(continent => {//me fijo en continentes si alguno coincide en una actividad con otros continentes
              // Filtra por actividades
              return continent.activities.includes(action.payload);
            });
            return {
              ...state,
              continents: filtroActivities
            }};

            case "FILTER_CONTINENTS": {
                const filtroContinents = state.continents.filter(continent => {//me fijo si algun pais coincide con el continente
                  // Filtra por nombre de continente
                  return continent.name.toLowerCase().includes(action.payload.toLowerCase());
                });
                return {
                  ...state,
                  continents: filtroContinents
                };
              }
        
        case "ORDER_PAISES":
            const orden=[...state.continents]
            orden.sort((a,b)=>{
                if(action.payload === "A"){
                    return a.name - b.name 
                }else if(action.payload === "D"){
                    return b.name - a.name
                }
            })
            return {...state,continents:orden}
            
        case "ORDER_POPULATION":
            const order=[...state.continents]
            order.sort((a,b)=>{
                if(action.payload === "A"){
                    return a.population - b.population
                }else if(action.payload === "D"){
                    return b.population - a.population
                }
            })
            return {...state,continents:order}

        default:return state 
    }
}

export default reducer