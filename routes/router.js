const express = require('express');
const router = require ('express').Router();
const usercontroller=require("../controllers/UserController")
const sensorscontroller=require("../controllers/SensorReadingController")
const sensorscontrol=require("../controllers/SensorsController")
const FarmsController=require("../controllers/FarmsController");
const CropsController = require('../controllers/CropsController');
router.get("/", (req,res,next)=>{
  res.send("Hello world!")
})
router.get("/allowners",usercontroller.getallowners)
router.get("/oneowner",usercontroller.getoneowner)
router.post("/addnewowner", usercontroller.addnewowner)
router.post("/deleteowner", usercontroller.deleteowner)
router.post("/editowner", usercontroller.updateowner)

router.get("/allsensorsreading",sensorscontroller.getallsensorsreading)
router.post("/addnewsensorreading",sensorscontroller.addnewsensorreding)
router.post("/deletesensorreading",sensorscontroller.deletesensorreading)
router.post("/editsensorreading",sensorscontroller.updatesensorreading)

router.get("/allsensors",sensorscontrol.getallsensors)
router.post("/addnewsensor",sensorscontrol.addnewsensor)
router.post("/deletesensor",sensorscontrol.deletesensor)
router.post("/editsensor",sensorscontrol.updatesensor)

router.get("/allfarms",FarmsController.getallfarms)
router.post("/addnewfarm",FarmsController.addnewfarm)
router.post("/deletefarm",FarmsController.deletefarm)
router.post("/editfarm",FarmsController.updatefarm)
        


router.get("/allcrops",CropsController.getallcrops)
router.post("/addnewcrop",CropsController.addnewcrop)
router.post("/deletecrop",CropsController.deletecrop)
router.post("/editcrop",CropsController.updatecrop)
    
module.exports = router