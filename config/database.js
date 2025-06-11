const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URL);

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database');
    }
};