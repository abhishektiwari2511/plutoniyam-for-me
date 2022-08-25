// const PublisherModel= require("../models/publisherModel")

// const createPublisher= async function (req, res) {
//     let publisher = req.body
//     let publisherCreated = await PublisherModel.create(publisher)
//     res.send({data: publisherCreated})
// }
// module.exports.createPublisher=createPublisher
const parseIp = (req) =>
    req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

console.log(parseIp(req))