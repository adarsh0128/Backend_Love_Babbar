const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Database connect succes"))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnect;
