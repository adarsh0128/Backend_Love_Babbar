const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const dbConnect = require("./configure/database.js");

app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("This is Adarsh");
// });

const todoRoutes = require("./routes/todos.js");

app.use("/api/v1", todoRoutes);

dbConnect();
app.listen(PORT, () => {
  console.log("App is running Succesfully");
});
