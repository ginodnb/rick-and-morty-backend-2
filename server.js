"use strict"

const express = require("express");
const cors = require('cors');
require('dotenv').config();
// const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

const errorHandler = require("./Handlers/500");
const notFoundHandler = require("./Handlers/404");
const rickRoutes = require("./Routes/Rick");

//middlewares
app.use(cors());
app.use(express.json());
app.use(rickRoutes);
app.use(errorHandler);
app.use("*", notFoundHandler);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

