require("dotenv").config();


const connectDB = require("./db/connect.js");
const Products = require("./Model/products.js");

const jsonProducts = require("./product.json");

const start = async(req,resp)=>{
    try {
       await connectDB(process.env.MONGO_URI);
       await Products.deleteMany();

       await Products.create(jsonProducts);
        console.log("Successful!!")
        process.exit(0)
    }
        
    catch (error) {
        console.log(error)
        process.exit(1)
}
}
start();
