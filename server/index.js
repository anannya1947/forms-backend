const express = require('express')
const app = express()
const bodyParser = require('body-Parser')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    hostname: "localhost",
    user: "root",
    password: "password",
    database: "sys",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/api/insert', (req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert="INSERT INTO movie_reviews(movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err,result)=>{
    console.log(err)
    })
})

app.listen(3005, () => {
    console.log("running on port 3005")
})