const errorHandler = async (err, req,resp , next) =>{
    console.log(err);
    return resp.status(500).json({message:"Error on internal server!!"})
}
module.exports = errorHandler ; 