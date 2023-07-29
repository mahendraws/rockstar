const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{

res.send("Welcome To My site");

})

app.listen(process.env.PORT,()=>{

    console.log("Server started");
})