const db = require("../config/db")

class UserModule {
    static async getowners() {
        return new Promise((resolve, reject) => {
            db.query("select * from owners",[], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }
    static async getone(ID) {
        return new Promise((resolve, reject) => {
            db.query("select * from owner WHERE ID = ?",[ID], (error, result)=>{
                if (error) {
                    reject(error)
                } else { 
                    resolve(result)
                } 
            });
        });
    }
    static async addnewowner(owner_name, email, passcode) {
        return new Promise((resolve) => {
            db.query("insert into owners (owner_name, email, passcode) values (?, ?, ?)", [owner_name, email, passcode],(e,r)=>{
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
            db.query("DELETE FROM owners WHERE id = ?", [id], (error, result) => {
                if (error) {
                    console.error(error);
                    resolve(false); // Resolve with false if there's an error
                } else {
                    resolve(true); // Resolve with true if the deletion is successful
                }
            });
        });
    }
    
static async edit(id,owner_name,email,passcode)
{
return new Promise(resolve=>{
    db.query("update owners set owner_name=?,email=?,passcode=? where id=?",[owner_name, email, passcode,id],(error,result)=>{
    if(!error)
    resolve (result)
    })
})
}

}

    module.exports  = UserModule;