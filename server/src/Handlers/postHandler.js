const createActivity = require("../controllers/createActivity");

const postHandler=async(req, res)=>{
    try{
        const infoActividad=req.body
        const actividad=createActivity(infoActividad)

        res.status(200).json(actividad)

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports=postHandler