const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
var notesRouter = require("./note-app/routes/note.routes");
var logger = require("morgan");
require('hbs')
require("dotenv").config();
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerDoc");

// create express app
const app = express();

app.use(logger('combined'));

// view engine setup
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'note-app', 'views'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

// swagger doc
app.use("/notes-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Configuring the database
const DATABASE_URL = process.env.DATABASE_URL;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//Route Prefixes
app.get('/', function (req, res) {
    res.render('index', {
        name: 'Sandip'
    });
});
app.use("/notes", notesRouter);


// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});