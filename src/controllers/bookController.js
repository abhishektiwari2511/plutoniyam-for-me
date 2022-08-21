const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
     let book = req.body
     let author= book.author
     let publisher= book.publisher
     let author_id= await authorModel.findById(author).select({_id:1})
     let publisher_id= await publisherModel.findById(publisher).select({_id:1})
     if(!author){
        return res.send("author detail is required");
     } if(!author_id){
        return res.send("the author_id is not correct");
     }if (!publisher){
        return res.send("publisher details is required");
     }if (!publisher_id){
        return res.send("the publisher_id is not correct")
     }
     let bookCreated= await bookModel.create(book)
     return res.send(bookCreated)
   

}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate("publisher")
    res.send({data: specificBook})

}
const allbook =async function(req,res){
   let allbook= await bookModel.updateMany(
      {publisherName :{$in :["peguin","harpercollins"]}},
      {$set :{isHardcover:false}},
      {new:true}
   )
   res.send({msg: allbook})
}


module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

module.exports.allbook=allbook