const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name is must']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:5.0
    },
    price:{
        type:Number,
        required:[true,"price is must"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:[String] ,
    //     enum:{
    //         value:["Acer","Dell","Hp","Mac"],
    //         message:"{VALUE} is not available"
    //     }
    required:true
    }

})

module.exports = mongoose.model('Products',ProductSchema);