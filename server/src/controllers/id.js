
const { Country, Activity } = require("../db");

async function getId(req, res) {
    try {
      const id = req.params.id.toUpperCase();
      const country = await Country.findOne({
        where: {
          id: id,
        },
        include:
        {model:Activity,
        attributes:["name","dificulty","duration","season"]}
      });
  
      return res.json(country);
    } catch (error) {
      res.send(error);
    }
  }

module.exports = getId;