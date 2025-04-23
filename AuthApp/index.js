const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//cookie-parser - what is this and why we need this ?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/database").connect();

//route import and mount
const user = require("./routes/user.js");
app.use("/api/v1", user);

//activate

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
