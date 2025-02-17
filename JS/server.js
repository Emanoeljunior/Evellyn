const path = require('path'); 
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
