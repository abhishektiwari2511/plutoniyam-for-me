let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getByDistricts= async function(req,res){
    try {
        let dis = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${dis} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dis}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
let memes= async function(req,res){
 try { let id= req.query.template_id
   let text0 =req.query.text0
   let text1= req.query.text1
   let email =req.query.username
   let pass =req.query.password
    var options = {
        method: 'post',
        url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${email}&password=${pass}`
       }
       let result = await axios(options)
       console.log(result.data)
       res.status(200).send({ msg: result.data })
   }
   catch (err) {
       console.log(err)
       res.status(500).send({ msg: err.message })
   }
      
      
      
}
let weather =async function(req,res){
    try{
        let q=req.query.q
        let appid=req.query.appid
        var options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({msg:result.data})
    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg:err.message})
    }
}

let getsortedcities = async function(req,res){
    try {
        let cities = ["Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobj = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b89997effe7e2f87e0deb34b2e02f9d9`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            cityobj.push(obj)
        }
        let sortedCities= cityobj.sort(function (a, b) { return (a.temp - b.temp) })
             res.status(200).send({status:true, data: sortedCities})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
   
    }



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistricts=getByDistricts
module.exports.memes=memes
module.exports.weather=weather
module.exports.getsortedcities=getsortedcities