export const FILTER_CONTINENTS="FILTER_CONTINENTS";
export const ORDER_ASC="ORDER_ASC";
export const FILTER_ACTIVITIES="FILTER_ACTIVITIES";
export const ORDER_DESC="ORDER_DESC";
export const TRAER_PAIS="TRAER_PAIS"



export const traer_pais=(currentCountries)=>{
    return{
        type:TRAER_PAIS,
        payload:currentCountries
        
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

export const order_asc=()=>{
    return{
        type:ORDER_ASC
        
    }
}

export const order_desc=()=>{
    return{
        type:ORDER_DESC
        
    }
}

