const express = require("express");
const { notes } = require("./db/db.json");
const path = require("path");

const app = express();

// parse incoming sttring or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// taking in datat and adding notes and sending it to backend




app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3003, () => {
  console.log(`API server now on port 3003`);
});
