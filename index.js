const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(req.file);
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening to port");
});
