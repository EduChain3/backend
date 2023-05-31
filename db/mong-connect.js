const mongoose=require("mongoose");
require("dotenv").config();
console.log(process.env.USER);
console.log(process.env.PASS);
const url=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.tnbldtj.mongodb.net/?retryWrites=true&w=majority`;

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };
