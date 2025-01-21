const express = require('express')

const app = express()

const port = 5000

const mongoDB = require("./db")


app.use((req, res, next /*Middleware*/)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // react host ho rhi hai on 3000 port
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


// calling mongoDB function
mongoDB();
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.get('/',(req,res)=>{

    res.send("Hello world!.....")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})