const jwt = require("jsonwebtoken");
const user_Register = require("../models/register");

const user_auth = async (req, res, next) => {
  try {
    
    console.log("kkdjsfksdjd");
    const token = req.cookies.jwt;
    console.log(req.cookies);
    console.log(token,"token");
    const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
    console.log(verifyUser,"jijfd");
    const user = await user_Register.findOne({ _id: verifyUser._id });
    console.log(user.firstname, "my");
    req.token = token;
    req.user = user;
    next();
  } catch (err) {
      console.log(err);
    res.status(401).send("hiboys");
  }
};
module.exports = user_auth;
