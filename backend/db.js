const mongoose = require('mongoose');

const mongoDB_URL='';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoDB_URL);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application on failure
    }
};

module.exports = mongoDB;
