const express = require("express");
// getting-started.js
const mongoose = require("mongoose");
const app = express();
const port = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/explore-mongoose"); //explore-mongoose is the name of the database
    console.log("Database is connected");
  } catch (error) {
    console.log("Failed to connect database");
  }
}
main()
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
