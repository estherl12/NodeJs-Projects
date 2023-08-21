require('dotenv').config();
require('express-async-error');

const express = require('express');
const app = express();

const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlingMiddleware = require("./middleware/error-handler.js");

const connectDb= require("./db/connect.js")

const productRouter = require('./route/products.js')



app.use(express.json()); //a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

app.get("/",(req,resp)=>{
    resp.send('<h1>Store API</h1> <a href="/api/v1/products">Products</a>')
})

app.use('/api/v1/products',productRouter);

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);
connectDb(process.env.MONGO_URI);
const port = process.env.PORT || 3000 ;
const start =async ()=>{
    try {
        
        //we can use directly the variable from env
        await connectDb(process.env.MONGO_URI);
        app.listen(port , console.log(`server running on port ${port}`))
        // console.log(connect.connection.host , connect.connection.name )
        // if(connectDB){
        //     console.log("connected to db");
        // }
    } catch (error) {
        console.log(error);

    }
}
start();

