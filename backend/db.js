const mongoose = require('mongoose'); // alternative for importing mongoose module

// MongoDB connection URI
const mongoDB_URI = '';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoDB_URI);
        console.log('MongoDB connected successfully!');

        // Access the "food_items" collection
        const fetched_data = mongoose.connection.db.collection("food_items");
        
        // Query the collection
        const data = await fetched_data.find({}).toArray();
        // console.log('Fetched Data:', data);

        // fetching another data files from DB i.e. foodCategory data
        const fetched_category_data=mongoose.connection.db.collection("foodCategory");

        //
        const category_data = await fetched_category_data.find({}).toArray();

        // console.log("Feteched category data: ", category_data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = mongoDB;
