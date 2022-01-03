const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    hostname: "localhost",
    user: "root",
    password: "password",
    database: "sys",
})

app.get('/', (req,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception','good movie');"
    db.query(sqlInsert, (err,result)=> {
        res.send("hello, world")
    })
})

app.listen(3005, () => {
    console.log("running on port 3005")
})