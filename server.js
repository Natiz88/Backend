import express from "express";
import mongoose from "mongoose";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const router = express.Router();

let books = ["hello"];

app.get("/", (req, res) => {
  res.send("This is the home page.");
});

app.get("/getAll", (req, res) => {
  res.send(JSON.stringify(books));
});

app.post("/getAll", (req, res) => {
  let book = req.body;
  books.push(book);
  res.send("The book was added");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
