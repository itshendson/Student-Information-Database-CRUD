const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});        
        console.log('Successfully connected!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDatabase;