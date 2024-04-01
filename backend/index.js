import express from "express";

const app = express()
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("Server is ready")
// })

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:"This is a Joke"
        },
        {
            id:2,
            title:"another joke",
            content:"This is second Joke"
        },
        {
            id:3,
            title:"3rd joke",
            content:"This is third Joke"
        },
        {
            id:4,
            title:"fourth joke",
            content:"This is 4th Joke"
        },
        {
            id:5,
            title:"Another joke",
            content:"This is 5th Joke"
        },
    ]
    res.send(jokes)
})


app.listen(process.env.PORT,()=>{
    console.log(`server is running port ${PORT}`)
})