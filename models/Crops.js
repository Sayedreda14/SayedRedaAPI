const db = require("../config/db")

class cropsmodule{
    static async getcrops() {
        return new Promise((resolve, reject) => {
            db.query("select * from crops",[], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }
    static async addcrop(ID,planting_date, farm_ID,crop_name,harvest_date) {
        return new Promise((resolve) => {
            db.query("insert into crops(ID,planting_date, farm_ID,crop_name,harvest_date) values (?, ?, ?,?)", [ID,planting_date, farm_ID,crop_name,harvest_date],(e,r)=>{
                if (!e) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        });
    }
    static async Delete(farm_ID) {
        return new Promise(resolve => {
            db.query("DELETE FROM  Crops WHERE farm_ID = ?", [farm_ID], (error, result) => {
                if (error) {
                    console.error(error);
                    resolve(false); // Resolve with false if there's an error
                } else {
                    resolve(true); // Resolve with true if the deletion is successful
                }
            });
        });
    }
    static async edits(farm_ID,harvest_date,planting_date,ID,crop_name)
    {
    return new Promise(resolve=>{
        db.query("update farms set farm_name=?,Location=?,ID=?, where owner_ID=?",[farm_ID,harvest_date,planting_date,ID,crop_name],(error,result)=>{
        if(!error)
        resolve (result)
        })
    })
    }


}
module.exports  =cropsmodule;