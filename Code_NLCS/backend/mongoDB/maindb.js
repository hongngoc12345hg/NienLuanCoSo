const mongoose = require("mongoose");

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/WebPhuKien');
        console.log("connected mongo")
    } catch (error) {
        console.log("connect fail");
    }
    
}
module.exports = {connect}