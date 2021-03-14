const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyparser.json({ extended: true }));
const port = process.env.PORT || 3001;
app.use(cors());
app.get("/welcome", (req, res) => {
  console.log("Hii hero");
  res.end("welcome bro");
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email == "ksanjiv05@gmail.com" && password == "sanjiv0005") {
    res.status(200).json({ success: "You are login successfully " });
  } else {
    res.status(401).json({ success: "Login failed !!!" });
  }
});

app.listen(port, () => {
  console.log(`lestening on `, port);
});
