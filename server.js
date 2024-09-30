const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//DOTENV Configuration
dotenv.config();

//REST Object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//STATIC FILE ACCESS
app.use(express.static(path.join(__dirname, "./client/build")));

//Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//PORT
const PORT = process.env.PORT || 8000;

//Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
