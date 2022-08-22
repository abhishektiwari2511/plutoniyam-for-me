const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModul")
const createBook= async function (req, res) {
    let data= req.body

    let saveData= await BookModel.create(data)
    res.send({msg: saveData})
}
const createAuthor=async function (req, res) {
    let data= req.body

        let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getBooksData= async function (req, res) {
let authors= await AuthorModel.find({author_name :"chetan bhagat"})
let bookid = await BookModel.find({author_id : {$eq : authors[0].author_id}})
res.send({ msg : bookid})
}
const findauthor= async function (req,res){
    let bookprice =await BookModel.findOneAndUpdate(
        { name : "Two states"},
        {prices : 100},
        {new : true}
    )
    let updateprice = bookprice.prices;
    let authorupdate =await AuthorModel.find({author_id:{$eq: bookprice.author_id}}).select({author_name :1, _id : 0})
    res.send({msg : authorupdate , updateprice})
}
const findBook = async function(req,res){
    let allBooks = await BookModel.find({ price :{$gte: 50,$lte: 100}})
    let store = allBooks.map(x=>x.author_id);
    let NewBooks = await AuthorModel.find({author_id : store}).select({author_name :1,_id: 0})
    res.send(NewBooks)
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.createAuthor= createAuthor
module.exports.findauthor=findauthor
module.exports.findBooks=findBook