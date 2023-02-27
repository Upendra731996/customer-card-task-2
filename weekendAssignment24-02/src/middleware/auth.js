const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(404)
        .send({ status: false, msg: "token must be present" });
    }

    jwt.verify(token,  "assignment3 functionUp", (err, decoded) => {
      if (err) {
        return res
          .status(404)
          .send({ status: false, msg: "enter a valid token" });
      } else {
        req.decodedToken = decoded;
      }
    });
    next();
  } catch (err) {
    return res.status(500).send({ status: false, msg: "Server Error" });
  }
};


module.exports = { authenticate };