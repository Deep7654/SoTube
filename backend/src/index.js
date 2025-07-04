import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from './app.js';
import express from "express"

const port = process.env.PORT;

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server is Listing on ${port}`)
    })
})
.catch((err)=>{
    console.log(`Faild To Connect DB ${err}`)
    app.on("erroer" , (err)=>{
      console.log(`Db Connection Erroe : ${err}`)
    })
})

app.use(express.json())
let user ;
app.post('/' , (req,res)=>{
  const {username , password}  = req.body;
  user = username
  console.log(username, password)
}) 

const users = {user : user + "getMinupulated"}
app.get('/',(req,res)=>{
  res.send(users);
})

const jokes = {
  "success": true,
  "jokes": [
    {
      "id": 1,
      "category": "programming",
      "type": "single",
      "joke": "Why do programmers prefer dark mode? Because the light attracts bugs.",
      "language": "en"
    },
    {
      "id": 2,
      "category": "general",
      "type": "twopart",
      "joke": "Why don’t skeletons fight each other?",
      "delivery": "They don’t have the guts.",
      "language": "en"
    },
    {
      "id": 3,
      "category": "pun",
      "type": "single",
      "joke": "I’m reading a book about anti-gravity. It’s impossible to put down!",
      "language": "en"
    },
    {
      "id": 4,
      "category": "pun",
      "type": "single",
      "joke": "Biggest Fear is When you HAve Small iykyk",
      "language": "en"
    }
  ]
}

app.get('/' , (req , res)=>{
    res.send("Server is Running")
})
app.get('/api/data' , (req ,  res)=>{
    // res.send("Sending  Data here")
    res.send(jokes)
})







