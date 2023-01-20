import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"sql6.freesqldatabase.com",
    user:"sql6590247",
    password:"dRIiicwRaa",
    database:"sql6590247"
})

app.get("/",(req,res)=>{
    res.json("Hello this is backend")
})

app.get("/guests",(req,res)=>{
    const q = "SELECT * FROM Guest"

    db.query(q,(err,data)=>{
        if(err)return res.json(err)

        return res.json(data)
    })
})

app.post("/insert",(req,res)=>{
    const q ="INSERT INTO Guest (`Gno`,`gname`,`address`,`phone`) VALUES(?)"

    const values = ["1","Ravi Sashtri","Mumbai","3216549870"]

    db.query(q,[values],(err,data)=>{
        if(err)return res.json(err);

        return res.json("Guest data added");
    })
})

app.listen(8800,()=>{
    console.log("Connected to Backend !")
})