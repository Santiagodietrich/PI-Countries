export const FILTER_CONTINENTS="FILTER_CONTINENTS";
export const ORDER_PAISES="ORDER_PAISES";
export const FILTER_ACTIVITIES="FILTER_ACTIVITIES";
export const ORDER_POPULATION="ORDER_POPULATION"


export const filter_continents=(continents)=>{
    return{
        type:FILTER_CONTINENTS,
        payload:continents

    }
}

export const filter_activities=(activities)=>{
    return{
        type:FILTER_ACTIVITIES,
        payload:activities
    }
}

export const order_paises=(order)=>{
    return{
        type:ORDER_PAISES,
        payload:order
    }
}

export const order_population=(population)=>{
    return{
        type:ORDER_POPULATION,
        payload:population
    }
}
