const sensors=require("../models/Sensors")
class SensorController{

    static async getallsensors(req,res)
    {     
     var results=await sensors.getsensors();
     if(results)
     res.send(results)

    }
    static async addnewsensor (req,res)
    {
       var Sensor_name =req.body.Sensor_name;
       var Sensor_type=req.body.Sensor_type;
       var Measurement_Unit=req.body.Measurement_Unit;
       var Location=req.body.Location;
       var ID=req.body.ID;
       var Installation_Date=req.body.Installation_Date;

        var x=await sensors.addsensor(Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date)
        if (x==true)
        res.send("add successfully")
        else 
        res.send("add failed")
    }
    static async deletesensor (req,res)
    {
     const Sensor_ID=req.body.Sensor_ID;
     if(Sensor_ID)
     {
        var result =await sensors.Delete(Sensor_ID)
        if (result)
        res.send("delete done")
       else 
       res.send("failed to delete sensor")
     }

    }
    static async updatesensor (req,res)
    {
        const Sensor_ID =req.body.Sensor_ID;
        const Sensor_name =req.body.Sensor_name;
        const Sensor_type=req.body.Sensor_type;
        const Measurement_Unit=req.body.Measurement_Unit;
        const Location=req.body.Location;
        const ID=req.body.ID;
        const Installation_Date=req.body.Installation_Date;
     
    
    var x=await sensors.edits(Sensor_ID,Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date)
    if(x)
    res.send("Data edited successfully")
   else{
    res.send("failed to edit data ")
    }
  }
}
  module.exports=SensorController