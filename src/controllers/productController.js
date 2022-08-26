
const ProductModel = require("../models/productModel")

const createProduct = async function(req,res){
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg:savedData})

    // const createBook= async function (req, res) {
    //     let data= req.body
    
    //     let savedData= await BookModel.create(data)
    //     res.send({msg: savedData})
    // }
    

}
module.exports.createProduct=createProduct