const mongoose=require("mongoose");
require("dotenv").config();
const url=`mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.tnbldtj.mongodb.net/?retryWrites=true&w=majority`;

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
