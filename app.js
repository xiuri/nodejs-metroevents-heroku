const express = require('express')
const app= express()
const morgan = require('morgan')
const mysql = require('mysql')

const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(morgan('short'))
app.use(bodyParser.json());
app.set('view engine', 'ejs')

const db = mysql.createConnection({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b164168e90900',
    password:'6cfccbd1',
    database:'heroku_e6e5a47597cf307'
})

app.get('/getUsers', function(req,res){
    db.query('SELECT * FROM users', (err,rows)=>{
        console.log("success");
        console.log(rows);
        res.json(rows);
    })
})


app.listen(port, () => {
    console.log("server is listening on port...")
})
