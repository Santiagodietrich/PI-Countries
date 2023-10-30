const {Country, Activity}= require("../db")

const createActivity = async (req, res) => {
    try {
        const { name, dificulty, duration, season, countries} = req.body;

        
        if (!name || !dificulty || !duration || !season || !countries) {
            return res.status(400).json({ message: "Faltan datos o países" });
        }

        
        const newActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season,
            countries
        });

 
        const countryModels = await Country.findAll({
            where: {
                name: countries // Utiliza los nombres de los países proporcionados
            },
            include: {
                attributes: ["name"],
                model: Activity,
                through: {
                    attributes: [],
                },
            }
        });
        await newActivity.addCountries(countryModels);

      
        res.status(201).json({ message: "Actividad turística creada y relacionada con países correctamente", newActivity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
  module.exports= createActivity




