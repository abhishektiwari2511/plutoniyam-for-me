

const mid2= function ( req, res, next) {
   
    let isFreeAppUser = req.headers.isfreeappuser
    console.log(isFreeAppUser)
if(!isFreeAppUser){
  return  res.send({msg:"pleace enter is FreeAppUse "})
}

else{
    console.log("Hi I am a middleware named Mid2")
   next()}
}




module.exports.mid2= mid2

