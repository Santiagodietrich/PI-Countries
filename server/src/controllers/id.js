
const { Country, Activity } = require("../db");

// const getId = async (req, res) => {
//     try {
//         const id = req.params.id;

//         // Busca un país en la base de datos por su ID
//         // const country = await Country.findOne({
//         //     where: { id },
//         //     include: {
//         //         model: Activity,
//         //         through: {
//         //             attributes: [],
//         //         },
//         //     },
//         // });
//         await Country.findOne({ where: { id: id } });
//         const country = await Type.findAll({
//             attributes: ["name"],
//             include: {
//               attributes: [],
//               model: Activity,
//               where: { id: id },
//             },
//         })
//         if (country) {
//             // Si se encuentra el país, enviarlo como respuesta junto con sus actividades
//             res.status(200).json(country);
//         } else {
//             // Si no se encuentra el país, enviar una respuesta de error
//             res.status(404).json({ error: "País no encontrado" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Error al buscar el país" });
//     }
// };

// module.exports = getId;


const getId = async (req, res) => {

    const { id } = req.params

    const idPais= id.toUpperCase()
    
    try {

        const country = await Country.findByPk(idPais)
        if(!country) {
            return res.status(404).send('Error: country not found')
        }

        res.status(200).json(country)
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
module.exports=getId