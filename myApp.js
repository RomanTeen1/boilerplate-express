let express = require('express');
let app = express();
require('dotenv').config();

let bodyParser = require('body-parser');

console.log("Hello World");
// Serve an HTML File

let myPath = __dirname + "/views/index.html";
app.get("/", function(req, res){
    res.sendFile(myPath);
});


// Serve Static Assets

let absolutePath = __dirname + "/public";
app.use("/public", express.static(absolutePath));



// Serve JSON on a Specific Route
/*
app.get("/json", function(req, res){
    res.json({'message': "Hello json"});
});
*/

// Use the .env file
/*
app.get("/json", function(req, res){
    let MESSAGE_STYLE = process.env.MESSAGE_STYLE;
    let word = 'Hello json';
    let myUppMess = process.env.MESSAGE_STYLE === 'uppercase' ? word.toUpperCase() : word;
    res.json({"message": myUppMess});
});
*/


// Implement a Root-Level Request Logger Middlewares
/*
app.use(function(req, res, next){
    console.log(req.method, req.path, '-' , req.ip);
    next();
});
*/

// Chain Middleware to Create a Time Server
/*
app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.send({time: req.time})
});
*/

// Get Route Parameter Input from the Client
/*
app.get('/:word/echo', function(req, res, next){
    res.send({echo: req.params.word})
});
*/


// Get Query Parameter Input from client
/*
app.get('/name', function(req, res){
    let first = req.query.first;
    let last = req.query.last;
    res.json({name: first +" "+ last});
});
*/

// Use body-parser to Parse POST Requests
/*
app.use("/", bodyParser.urlencoded({extended: false}));
*/



// Get Data from POST Requests

app.post('/name', bodyParser.urlencoded({extended:false}), function(req, res){
    let first = req.body.first;
    let last = req.body.last;
    res.json({name: first +" "+ last});
});












 module.exports = app;
