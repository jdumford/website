const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser");
const queries = require("./queries");

// connect DB
var connect = mysql.createConnection({
    host: 'ncaa-db.c95kxzbxiuvf.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'jdumford',
    password: 'runthedistrict',
    database: 'ncaa_db'
})
connect.connect(function(error){
    if(!!error){
        console.log('error');
        throw error;
    }else{
        console.log("connected");
    }
})

//create express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/getRegionalsColumn/:column", (req, res, next) => {
    sql = queries.getColumn(req.params.column);
    connect.query(sql, function (err, result) {
        if (err){
            res.status(500).json({
                message: "DB error.",
                error: err
            })
            throw err;
        }
        rows = [];
        for (row in result){
            rows.push(result[row][req.params.column]);
        }
        res.status(200).json({
            message: "Query executed!",
            rows: rows
        });
    });
});




app.get("/getNumberRegionalQualifiers", (req, res, next) => {
    sql = queries.getNumberRegionalQualifiers(req.query.school, req.query.event, req.query.year, req.query.region, req.query.sex);
    connect.query(sql, function (err, result) {
        if (err){
            res.status(500).json({
                message: "DB error.",
                error: err
            })
            throw err;
        }
        rows = [];
        for (row in result){
            rows.push(result[row]);
        }
        res.status(200).json({
            message: "Query successful!",
            rows: rows
        });
    });
    
});

app.get("/getNumberNCAAQualifiers", (req, res, next) => {
    sql = queries.getNumberNCAAQualifiers(req.query.school, req.query.event, req.query.year, req.query.round, req.query.sex);
    connect.query(sql, function (err, result) {
        if (err){
            res.status(500).json({
                message: "DB error.",
                error: err
            })
            throw err;
        }
        rows = [];
        for (row in result){
            rows.push(result[row]);
        }
        res.status(200).json({
            message: "Query successful!",
            rows: rows
        });
    });
    
});


module.exports = app;