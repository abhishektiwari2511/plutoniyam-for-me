const jwt = require("jsonwebtoken")

const authenticate = function(req, res, next) {
    
  try{ {
     let token = req.headers["x-auth-token"];
  
    
    if (!token) return res.status(401).send({ status: false, msg: "token must be present"});
  
    console.log(token);
    
    
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if (!decodedToken){
      return res.status(401).send({ status: false, msg: "token is invalid" });
    }
      req.loggedInUser=decodedToken.userId
    next()
  }}
  catch(err){res.status(500).send({msg:"server issue",})}
}


const authorise = function(req, res, next) {
    
   try{ let reqUserId= req.params.userId
    if(req.loggedInUser!= reqUserId){
      return  res.status(403).send({status:false,msg:"this is not correct"})
    }
    next()}
    catch(err){res.status(500).send({msg:"server issue"})}
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise