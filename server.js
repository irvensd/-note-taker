const express = require("express");
const path = require("path");
const fs = require("fs");
const notes  = require("./db/db.json");


const app = express();

// parse incoming sttring or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// taking in data and adding notes and sending it to backend


function createNewNote(body, newNotes) {
    newNotes =[];
    console.log(body);
    const noteTaking = body;
    newNotes.push(noteTaking);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes: newNotes }, null , 2),
    )
  return body;
}

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.post("/notes", (req, res) => {
  console.log(req.body);

  const noteTaking = createNewNote(req.body, notes )
  res.json(noteTaking);
});

app.listen(3003, () => {
  console.log(`API server now on port 3003`);
});

