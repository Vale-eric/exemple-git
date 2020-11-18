import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
const db = 'mongodb://localhost:27017/leslauriersdecantenay'

const app = express()
// Middleware
// app.use(helmet())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));











const port = 5000; // Sets port for server

app.listen(port, () => console.log(`Server started on port ${port}`));