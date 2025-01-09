const mongoose = require('mongoose');

const mongoDB_URL = 'mongodb+srv://shaileshmadne29:Shailesh2906@cluster0.hfznp.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

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
