var express = require('express')
var cors = require('cors')
var app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const jwt =require('jsonwebtoken')
const secret_key = 'phum'
const bodyParser = require('body-parser');

app.use(cors())
// get the client
const mysql = require('mysql2');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })


// create the connection to database
const connection = mysql.createPool({
  host: 'localhost'||process.env.db_host,
  user: 'root'||process.env.db_user,
  database: 'mydb'||process.env.db_database,
  password: ""||process.env.db_password
});

function check (req, res, next){
  const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).send('Access Denied')
    }
    else{
        try{
            let verify = jwt.verify(token,secret_key)
            console.log(verify)
            next()
        }
        catch(err){
            res.status(400).send('Invalid Token')
        }
    }
}

app.get('/re', function (req, res, next) {
  // simple query
  connection.query(
      'SELECT * FROM `re`',
      function(err, results, fields) {
        
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
          res.json(results);
      }
  );
})

app.get('/bisection', function (req, res, next) {
  // simple query
  connection.query(
      'SELECT * FROM `bisection`',
      function(err, results, fields) {
          res.json(results);
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
  );
})

app.get('/falsepos', function (req, res, next) {
  // simple query
  connection.query(
      'SELECT * FROM `falsepos`',
      function(err, results, fields) {
          res.json(results);
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
  );
})

app.get('/matrix',check, function (req, res, next) {
  // simple query
connection.query(
    'SELECT * FROM `matrix`',
    function(err, results, fields) {
        res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
})
app.post('/token',urlencodedParser,function(req,res,next) {
  const username = req.body.username
  const password = req.body.password
  const token = jwt.sign({username,password},secret_key)
  res.send(token)
})

app.get('/login',urlencodedParser,function(req,res,next) {
  const token = jwt.sign({user:"phum"},secret_key)
  res.send(token)
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)

module.exports = app


