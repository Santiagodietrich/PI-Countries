const {Country, Activity}= require("../db")

const createActivity = async (req, res) => {
    try {
        const { name, dificulty, duration, season, countries } = req.body;

        // Validar que se proporcionaron todos los datos necesarios
        if (!name || !dificulty || !duration || !season || !countries) {
            return res.status(400).json({ message: "Faltan datos o países" });
        }

        // Crear la actividad turística
        const newActivity = await Activity.findOrCreate({
            name,
            dificulty,
            duration,
            season
        });

        // Buscar los países por nombre
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

        // Asociar la actividad a los países
        await newActivity.addCountries(countryModels);

        // Enviar respuesta de éxito
        res.status(201).json({ message: "Actividad turística creada y relacionada con países correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = createActivity;
