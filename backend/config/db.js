const mongoose = require('mongoose');
const { DB } = require('./envConfig');

const connect = async() =>{
    try {
        await mongoose.connect(DB);
        console.log("Connected");
    } catch (error) {
        console.log("Error Connecting DB ", error.message);
        process.exit;
    }
}

module.exports = connect;