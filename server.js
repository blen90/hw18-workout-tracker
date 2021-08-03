const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const config = { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false }
    
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", config);

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", config);

app.use = require('./routes/api.js');

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});