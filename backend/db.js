const mongoose = require('mongoose'); // alternative for importing mongoose module

// MongoDB connection URI
// db name = gofoodmern
const mongoDB_URI = 'mongodb+srv://shaileshmadne29:Shailesh2906@cluster0.hfznp.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoDB_URI);
        console.log('DB connected successfully!');

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


        const user_data = mongoose.connection.db.collection("users");

        
        
        const user_data_fetched = await user_data.find({}).toArray();
        
        // console.log("Fetched user data: ", user_data_fetched);
        // const count = await user_data.countDocuments();
        // console.log('Count:',count);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = mongoDB;
