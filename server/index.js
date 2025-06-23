const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const clientOptions = {serverApi: { version: "1", strict: true, deprecationErrors: true },};

let BooksRout = require('./BookRoute')
app.use('/', BooksRout)

async function connectMongo() {
  try {
    await mongoose.connect(process.env.URI, clientOptions);
    console.log("connected successfully to mongodb");
  } catch (err) {
    console.log(err);
  }
}
connectMongo();
app.listen(5000 );

