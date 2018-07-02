const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
let books = [
  {
    title: "harry potter",
    summary: "someone dies"
  },
  {
    title: "Game of Thrones",
    summary: "everyone dies"
  }
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// GET books
app.get("/books", (req, res) => {
  res.send(books);
});

// GET books/:id
app.get("/books/:id", (req, res) => {
  res.send({
    message: `book with id: ${req.params.id}`
  });
});

// POST a new book to /books
app.post("/books", (req, res) => {
  console.log("req.body is", req.body);
  books = [...books, req.body];
  res.send(books);
  console.log("okok");
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}...`);
});
