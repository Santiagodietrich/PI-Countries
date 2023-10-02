// const {Country, Activity}= require("../db")

// const createActivity = async (req, res) => {
//     try {
//         const { name, dificulty, duration, season, countries } = req.body;

//         // Validar que se proporcionaron todos los datos necesarios
//         if (!name || !dificulty || !duration || !season || !countries) {
//             return res.status(400).json({ message: "Faltan datos o países" });
//         }
//         console.log(req.body)

//         // Crear la actividad turística
//         const newActivity = await Activity.findOrCreate({
//             name,
//             dificulty,
//             duration,
//             season
//         });

//         // Buscar los países por nombre
//         const countryModels = await Country.findAll({
//             where: {
//                 name: countries // Utiliza los nombres de los países proporcionados
//             },
//             include: {
//                 attributes: ["name"],
//                 model: Activity,
//                 through: {
//                     attributes: [],
//                 },
//             }
//         });

//         // Asociar la actividad a los países
//         await newActivity.addCountries(countryModels);

//         // Enviar respuesta de éxito
//         res.status(201).json({ message: "Actividad turística creada y relacionada con países correctamente" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Error interno del servidor" });
//     }
// };

// module.exports = createActivity;



// const { Country, Activity } = require("../db");

// const createActivity = async (req, res) => {
//   try {
//     const { name, dificulty, duration, season, countries } = req.body;

//     // Validar que se proporcionaron todos los datos necesarios
//     if (!name || !dificulty || !duration || !season || !countries) {
//       return res.status(404).json({ message: "Faltan datos o países" });
//     }

//     // Buscar si la actividad ya existe por nombre
//     const existingActivity = await Activity.findOne({
//       where: { name },
//     });

//     if (existingActivity) {
//       // La actividad ya existe, no la crees nuevamente
//       return res
//         .status(409)
//         .json({ message: "La actividad ya existe" });
//     }

//     // Crear la actividad turística
//     const newActivity = await Activity.create({
//       name,
//       dificulty,
//       duration,
//       season,
//     });

//     // Buscar los países por nombre
//     const countryModels = await Country.findAll({
//       where: {
//         name: countries, // Utiliza los nombres de los países proporcionados
//       },
//       include: {
//         attributes: ["name"],
//         model: Activity,
//         through: {
//           attributes: [],
//         },
//     }
//     });
//     console.log(countries)

//     // Asociar la actividad a los países
//     await newActivity.addCountries(countryModels);

//     // Enviar respuesta de éxito
//     res
//       .status(201)
//       .json({
//         message:
//           "Actividad turística creada y relacionada con países correctamente",
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error interno del servidor" });
//   }
// };

// module.exports = createActivity;


// const createActivity = async (req, res) => {
//   try {
//     const { name, dificulty, duration, season, countries } = req.body

//     console.log(countries)

//     if (!name || !dificulty || !duration || !season || !countries) {
//       return res
//         .status(400)
//         .json({
//           message:
//             "Todos los campos son obligatorios y debes relacionar al menos un país.",
//         });
//     }

//     const newActivity = await Activity.create({
//       name:name,
//       dificulty:dificulty,
//       duration:duration,
//       season:season
//     });
//     console.log(newActivity)

//     // countries.forEach(async (country) => {
//     //   let activityCountry = await Country.findOne({
//     //     where: {
//     //       id: country,
//     //     },
//     //   });
//     //   await newActivity.addCountry(activityCountry);
//     // });



//     // for(countryName of countries){
//     //   const pais=await Country.findOne({
//     //     where: {name:countryName}
        
//     //   }) 
//     //   if(pais){
//     //   await newActivity.addCountry(Country)
//     //   }else{
//     //     throw new Error ("No se encontro el pais")
//     //   }
//     // }

//     // for(let countryName of countries){
//     //   const pais = await Country.findOne({
//     //     where: {name: countryName}
//     //   }) 
//     //   if(pais){
//     //     await newActivity.addCountry(pais)
//     //   }else{
//     //     throw new Error ("No se encontro el pais")
//     //   }
//     // }

//     const pais = await Country.findOne({
//       where: {name: countries}
//     }) 
//     if(pais){
//       await newActivity.addCountry(pais)
//     }else{
//       throw new Error ("No se encontro el pais")
//     }

//     res.status(201).json({ message: "Actividad turística creada con éxito." })
//     return newActivity
//   } catch (error) {
//     console.error("Error al crear actividad turística:", error);
//     res.status(500).json({ error: "Error interno del servidor" });
//   }
// };



const {Activity, Country} = require("../db")

const createActivity = async(activitieInfo) => {
    try {
        const {name,difficulty,duration,season, countries} = activitieInfo
        const newActivity = await Activity.create({
            name: name,
            dificulty: difficulty,
            duration: duration,
            season: season
        })

        if (!countries || countries.length === 0) {
            throw Error("debe agregar un pais para relacionar la actividad")
        }
            for(countryName of countries) {
              const country = await Country.findOne({where:{ name: countryName}});
              if (country) {
                await newActivity.addCountry(country);
              } else {
                throw Error(`No se encontró el país: ${countryName}`);
              }
          }
          if(newActivity){console.log("activitie creada");}
          return newActivity
      } catch (error) {
          console.log("activitie no creada", error);
          return error;
      }
  };





module.exports = createActivity