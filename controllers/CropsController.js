const crops = require("../models/Crops");
class CropsController{

    static async getallcrops(req,res)
    {     
     var results=await crops.getcrops();
     if(results)
     res.send(results)

    }
    static async addnewcrop (req,res)
    {
       var farm_ID=req.body.farm_ID;
       var crop_name=req.body.crop_name;
       var ID=req.body.ID;
       var planting_date=req.body.planting_date;
       var harvest_date=req.body.harvest_date;
       

        var x=await crops.addcrop(ID,planting_date, farm_ID,crop_name,harvest_date)
        if (x==true)
        res.send("add successfully")
        else 
        res.send("add failed")
    }
    static async deletecrop (req,res)
    {
     const farm_ID=req.body.farm_ID;
     if(farm_ID)
     {
        var result =await crops.Delete(farm_ID)
        if (result)
        res.send("delete done")
       else 
       res.send("failed to delete crops")
     }

    }
    static async updatecrop(req,res)
    {
        const farm_ID=req.body.farm_ID;
        const  ID=req.body.ID;
        const harvest_date=req.body.harvest_date;
        const crop_name=req.body.crop_name;
        const  planting_date=req.body.planting_date;
    
    var x=await sensors.edits(farm_ID,harvest_date,planting_date,ID,crop_name)
    if(x)
    res.send("Data edited successfully")
   else{
    res.send("failed to edit data ")
    }
  }
}
  module.exports=CropsController