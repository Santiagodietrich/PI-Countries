
const { Country, Activity } = require("../db");

const getId = async (req, res) => {
    try {
        const id = req.params.id;

        // Busca un país en la base de datos por su ID
        const country = await Country.findOne({
            where: { id },
            include: {
                model: Activity,
                through: {
                    attributes: [],
                },
            },
        });

        if (country) {
            // Si se encuentra el país, enviarlo como respuesta junto con sus actividades
            res.status(200).json(country);
        } else {
            // Si no se encuentra el país, enviar una respuesta de error
            res.status(404).json({ error: "País no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al buscar el país" });
    }
};

module.exports = getId;
