export const FILTER_PAISES="FILTER_PAISES";
export const ORDER_PAISES="ORDER_PAISES"

// export const add_paises=(paises)=>{
//     const endpoint='localhost:3001/countries'
//     try{
//         return async(dispatch)=>{
//             const {data}=await axios.post(endpoint,paises)
//             return dispatch({
//                 type:ADD_PAISES
//                 payload:data
//             });
//         };
//     }catch(error){
//         console.error(error.message)
//     }
// };



export const filter_paises=(continents)=>{
    return{
        type:FILTER_PAISES,
        payload:continents

    }
}

export const order_paises=(order,population)=>{
    return{
        type:ORDER_PAISES,
        payload:order
    }
}

