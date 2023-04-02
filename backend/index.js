import express from "express"
import mysql from "mysql"
import cors from 'cors';

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"dbms1"
})

app.use(express.json());

app.use(cors())

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

app.get("/hotels",(req,res)=>{
    const q = "SELECT * FROM hotel"

    db.query(q,(err,data)=>{
        if(err)return res.json(err)

        return res.json(data)
    })
})

app.get("/bookings",(req,res)=>{
    const q = "SELECT bookingid,gname, DATE_FORMAT(date_from, '%W %M %e %Y' ) as checkin, DATE_FORMAT(date_to, '%W %M %e %Y' ) as checkout,hname,room_type from booking left join guest on booking.guestno=guest.gno left join hotel on booking.hno=hotel.hno"

    db.query(q,(err,data)=>{
        if(err)return res.json(err)
        
        return res.json(data)
    })
})

app.post("/insert",(req,res)=>{
    const q1 ="INSERT INTO Guest (`Gno`,`gname`,`address`,`phone`) VALUES(?)"

    const values1 = [
        req.body.bookingid,
        req.body.gname,
        req.body.address,
        req.body.phone

    ]

    const q2 = "INSERT INTO BOOKING (`bookingid`,`GUESTNO`,DATE_FROM,DATE_TO,HNO) VALUES(?)"

    const values2 = [
        req.body.bookingid,
        req.body.bookingid,
        req.body.checkin,
        req.body.checkout,
        req.body.hno
    ]

    db.query(q1,[values1],(err,data)=>{
        if(err)return res.json(err);

        // return res.json("Guest data added");
    })

    db.query(q2,[values2],(err,data)=>{
        if(err)return res.json(err);

        return res.json("Booking data added");
    })

})

app.get("/id",(req,res)=>{
    const q = "SELECT MAX(bookingid)+1 as id FROM booking"

    db.query(q,(err,data)=>{
        if(err)return res.json(err)

        return res.json(data)
    })
})

app.listen(8800,()=>{
    console.log("Connected to Backend !")
})