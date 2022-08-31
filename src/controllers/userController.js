const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// 1.............createuser................
const createUser = async function (abcd, xyz) {
  
  try{let data = abcd.body;
  let savedData = await userModel.create(data);
  
  xyz.status(201).send({ msg: savedData })}
  catch(err){xyz.status(500).send({msg:"server issue"})}
};
//2..............loginuser....................
const loginUser = async function (req, res) {
 try {let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FUnctionUp",
    },
    "functionup-plutonium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}
catch(err){res.status(500).send({msg:"server issue"})}
};


//3..................fetchdata..............
const getUserData = async function (req, res) {
try{ let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch(err){res.status(500).send({msg:"server issue"})}
};
//4.................update......................
const updateUser = async function (req, res) {


 try{ let userId = req.params.userId;
  let user = await userModel.findById(userId);
   if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: true, data: updatedUser })}
  catch(err){res.status(500).send({msg:"server issue"})}
};



//5..................delete..................
const deleteUser = async function (req, res) {
 
 try{ let userId = req.params.userId;
  let user = await userModel.findById(userId);
  console.log(user)
  
  if (!user) {
    return res.status(404).send("No such user exists");
  }
 
  user.isDeleted = true
 
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, user, {new : true});
  
  res.status(200).send({ status: true, data: updatedUser })}
  catch(err){res.status(500).send({msg:"server issue"})}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser 