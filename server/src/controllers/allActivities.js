const {Activity,Country}= require("../db")

const allActivities= async (req,res)=>{
    try{
       const traer = await Activity.findAll(
       {                     
          include:
          {model: Country,
              attributes:
              ["id", "name", "flags", "continents"]
          }
        }
       )

    if(traer){
        res.status(200).json(traer)
    }else{
        res.status(400).send("No se encontro actividad")
    } 
    }catch(error){
        res.status(500).json({error:error.message})
    }
    

}
module.exports= allActivities