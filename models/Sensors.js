const db = require("../config/db")
class SensorModule {
    static async getsensors() {
        return new Promise((resolve, reject) => {
            db.query("select * from sensors",[], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }

    static async addsensor(Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date) {
        return new Promise((resolve) => {
            db.query("insert into sensors (Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date) values (?,?,?,?,?,?)", [Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date],(e,r)=>{
                if (!e) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        });
    }
    static async Delete(Sensor_ID) {
        return new Promise(resolve => {
            db.query("DELETE FROM sensors WHERE Sensor_ID = ?", [Sensor_ID], (error, result) => {
                if (error) {
                    console.error(error);
                    resolve(false); // Resolve with false if there's an error
                } else {
                    resolve(true); // Resolve with true if the deletion is successful
                }
            });
        });
    }
    
static async edits(Sensor_ID,Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date)
{
return new Promise(resolve=>{
    db.query("update sensors set Sensor_name=?,Sensor_type=?,Measurement_Unit=?,Location=?,ID=?,Installation_Date=? where Sensor_ID=?",[Sensor_name,Sensor_type,Measurement_Unit,Location,ID,Installation_Date,Sensor_ID],(error,result)=>{
    if(!error)
    resolve (result)
    })
})
}

}

    module.exports  = SensorModule;