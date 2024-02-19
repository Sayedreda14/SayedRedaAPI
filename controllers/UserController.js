const owners=require("../models/User")


  class UserController{

    static async getallowners(req,res)
    {     
     var results=await owners.getowners();
     if(results)
     res.send(results)

    }
    static async getoneowner(req,res)
    {     
      const ID=req.body.ID;
     var results=await owners.getone(ID);
     if(results)
     res.send(results)

    }
    static async addnewowner (req,res)
    {
       var name =req.body.owner_name;
       var email =req.body.email;
       var passcode=req.body.passcode;


        var x=await owners.addnewowner(name,email,passcode)
        if (x==true)
        res.send("add successfully")
        else 
        res.send("add failed")
    }
    static async deleteowner (req,res)
    {
     const id=req.body.id;
     if(id)
     {
        var result =await owners.delete(id)
        if (result)
        res.send("delete done")
       else 
       res.send("failed to delete owner")
     }

    }
    static async updateowner (req,res)
    {
     const id=req.body.id;
     const newname =req.body.owner_name;
     const newemail =req.body.email;
     const  newpasscode=req.body.passcode;
     
    
    var x=await owners.edit(id,newname,newemail,newpasscode)
    if(x)
    res.send("Data edited successfully")
   else{
    res.send("failed to edit data ")
    }
  }
}
  module.exports=UserController