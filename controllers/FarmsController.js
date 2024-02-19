const farms = require("../models/Farms");
class FarmsController{

    static async getallfarms(req,res)
    {     
     var results=await farms.getfarms();
     if(results)
     res.send(results)

    }
    static async addnewfarm (req,res)
    {
       var farm_name=req.body.farm_name;
       var Location=req.body.Location;
       var ID=req.body.ID;
       var owner_ID=req.body.owner_ID;
       

        var x=await farms.addfarm(ID,owner_ID,farm_name,Location)
        if (x==true)
        res.send("add successfully")
        else 
        res.send("add failed")
    }
    static async deletefarm (req,res)
    {
     const owner_ID=req.body.owner_ID;
     if(owner_ID)
     {
        var result =await farms.Delete(owner_ID)
        if (result)
        res.send("delete done")
       else 
       res.send("failed to delete farm")
     }

    }
    static async updatefarm(req,res)
    {
        const owner_ID=req.body.owner_ID;
        const  ID=req.body.ID;
        const farm_name=req.body.farm_name;
        const Location=req.body.Location;
    
    var x=await sensors.edits(owner_ID,farm_name,Location,ID)
    if(x)
    res.send("Data edited successfully")
   else{
    res.send("failed to edit data ")
    }
  }
}
  module.exports=FarmsController