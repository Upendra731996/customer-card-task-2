let Usermodel= require("../Model/userModel");
const jwt= require("jsonwebtoken");

const createUser = async function (req, res) {
    try {
      let userDetails = req.body;
  
  
      let savedData = await Usermodel.create(userDetails);
  
     return res.status(201).send({ status: true, data: savedData });
  
    } catch (error) {
     return  res.status(500).send({ status: false, error: error.message });
    }
  };

  
const loginUser = async function (req, res) {
    try {
      let emailId = req.body.email;
      let password = req.body.password;
  
      if ( !emailId || !password ) {
        return res.status(404).send({ status: false, msg: "Provide a valid credentials" });
      }
  
      let userDetails = await Usermodel.findOne({
        email: emailId,
        password: password
      });
      if (!userDetails)
        return res.status(404).send({
          status: false,
          msg: "email or the password is not corerct",
        });
  
      let token = jwt.sign(
        {
          userId: userDetails._id.toString()
        },
        "assignment3 functionUp"
      );
  
      res.setHeader("x-auth-token", token);
      return res.status(200).send({ status: true, data: token });
    }
     catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  
  
  module.exports = { createUser, loginUser };

