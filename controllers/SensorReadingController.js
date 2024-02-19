const sensorreadings=require("../models/SensorsReading")
class SensorReadingController{

    static async getallsensorsreading(req,res)
    {     
     var results=await sensorreadings.getreadingsensors();
     if(results)
     res.send(results)

    }
    static async addnewsensorreding (req,res)
    {
       var sensor_id =req.body.sensor_id;
       var sensor_name =req.body.sensor_name;
       var value=req.body.value;
       var timestamp=req.body.timestamp;


        var x=await sensorreadings.addsensor(sensor_id,sensor_name,value,timestamp)
        if (x==true)
        res.send("add successfully")
        else 
        res.send("add failed")
    }
    static async deletesensorreading (req,res)
    {
     const id=req.body.id;
     if(id)
     {
        var result =await sensorreadings.delete(id)
        if (result)
        res.send("delete done")
       else 
       res.send("failed to delete sensor")
     }

    }
    static async updatesensorreading (req,res)
    {
       const id=req.body.id;
       const sensor_id =req.body.sensor_id;
       const sensor_name =req.body.sensor_name;
       const value=req.body.value;
       const timestamp=req.body.timestamp;
     
    
    var x=await sensorreadings.edit(id,sensor_id,sensor_name,value,timestamp)
    if(x)
    res.send("Data edited successfully")
   else{
    res.send("failed to edit data ")
    }
  }
}
  module.exports=SensorReadingController