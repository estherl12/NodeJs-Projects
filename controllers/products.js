const Product = require("../Model/products.js") 
const getAllProducts = async (req,resp)=>{
    const products = await Product.find({})
    resp.status(200).send({products });
}
const getAllProductsStatic = async (req,resp)=>{
    const products = await Product.find(req.query);
    resp.status(200).send({message:'products are testing routes'});
}

module.exports = {getAllProducts , getAllProductsStatic}