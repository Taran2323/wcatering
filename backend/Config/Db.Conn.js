const mongoose = require("mongoose")
module.exports = async () => {
    mongoose
      .connect("mongodb://localhost:27017/myapp")
      .then(() => {
        console.log("Db is connect");
      })
      .catch((err) => {
        console.log(err);
        console.log("Db is not connect");
      });
            
        
};