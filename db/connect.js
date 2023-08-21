const mongoose = require("mongoose");
const connectDB = async (url) =>{
    return mongoose.connect=(url,{
        useNewUrlParser:true ,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    // const connect = await mongoose.connect(process.envurl);
    // console.log("server connected to",connect.connection.host , connect.connection.name )

}
module.exports = connectDB ;