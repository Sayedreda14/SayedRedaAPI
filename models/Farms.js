const db = require("../config/db")

class farmsmodule{
    static async getfarms() {
        return new Promise((resolve, reject) => {
            db.query("select * from farms",[], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }
    static async addfarm(ID,owner_ID,farm_name,Location) {
        return new Promise((resolve) => {
            db.query("insert into farms(ID,owner_ID,farm_name,Location) values (?, ?, ?,?)", [ID,owner_ID,farm_name,Location],(e,r)=>{
                if (!e) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        });
    }
    static async Delete(owner_ID) {
        return new Promise(resolve => {
            db.query("DELETE FROM  Farms WHERE owner_ID = ?", [owner_ID], (error, result) => {
                if (error) {
                    console.error(error);
                    resolve(false); // Resolve with false if there's an error
                } else {
                    resolve(true); // Resolve with true if the deletion is successful
                }
            });
        });
    }
    static async edits(owner_ID,farm_name,Location,ID)
    {
    return new Promise(resolve=>{
        db.query("update farms set farm_name=?,Location=?,ID=?, where owner_ID=?",[owner_ID,farm_name,Location,ID],(error,result)=>{
        if(!error)
        resolve (result)
        })
    })
    }


}
module.exports  = farmsmodule;