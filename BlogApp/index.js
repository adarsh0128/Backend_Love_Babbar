const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const dbConnect = require("./config/database.js");

// app.use("/", (req, res) => {
//   res.send("This is Adarsh");
// });

const blog = require("./routes/blog.js");

app.use("/api/v1", blog);

dbConnect();
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
