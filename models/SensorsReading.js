const db = require("../config/db")
class SensorReadingModule {
    static async getreadingsensors() {
        return new Promise((resolve, reject) => {
            db.query("select * from sensorreadings",[], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }

    static async addsensor(sensor_id,sensor_name,value,timestamp) {
        return new Promise((resolve) => {
            db.query("insert into sensorreadings (sensor_id,sensor_name,value,timestamp) values (?, ?, ?,?)", [sensor_id,sensor_name,value,timestamp],(e,r)=>{
                if (!e) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        });
    }
    static async delete(id) {
        return new Promise(resolve => {
            db.query("DELETE FROM sensorreadings WHERE id = ?", [id], (error, result) => {
                if (error) {
                    console.error(error);
                    resolve(false); // Resolve with false if there's an error
                } else {
                    resolve(true); // Resolve with true if the deletion is successful
                }
            });
        });
    }
    
static async edit(id,sensor_id,sensor_name,value,timestamp)
{
return new Promise(resolve=>{
    db.query("update sensorreadings set sensor_id=?,sensor_name=?,value=?,timestamp=? where id=?",[sensor_id,sensor_name,value,timestamp,id],(error,result)=>{
    if(!error)
    resolve (result)
    })
})
}

}

    module.exports  = SensorReadingModule;