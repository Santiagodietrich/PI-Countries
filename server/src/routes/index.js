const { Router } = require("express");
const allCountries= require("../controllers/allCountrys")
const getId= require("../controllers/id")
const createActivity= require("../controllers/createActivity")
const allActivities= require("../controllers/allActivities")
const name= require("../controllers/name")
// const postHandler=require("../Handlers/postHandler")

const router = Router();

router.get("/countries", allCountries)
router.get("/countries/:id", getId)
router.get("/countries-name",name)
router.post("/activities",createActivity)

router.get("/activities/activity",allActivities)



module.exports = router;
