require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", routes);

const port = 5000;


const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
