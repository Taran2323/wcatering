var User = require("../model/userSchema");
var CryptoJS = require("crypto-js");
const helper = require("../middelware/helper");
var jwt = require("jsonwebtoken");
const secret = "testingEncription@123";

module.exports = {
  Login: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        return helper.failed(res, "user not found");
      }
      console.log(req.body, "=dhdhdhhdhdddddddddddddddddddddhd");

      // var bytes = CryptoJS.AES.decrypt(user.password, secret);
      // var originalText = bytes.toString(CryptoJS.enc.Utf8);
      console.log(user.password);
      if (password !== user.password) {
        return helper.failed(res, "password is not correct");
      }
      var token = jwt.sign({ user: user }, secret);

      const plainObj = user.toObject();

      plainObj.token = token;
      return res.status(200).json({
        body: plainObj,
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
