const express = require("express");

const app = express();

app.use(express.json());

app.get("/",async (req,res)=>{
    return res.json("API ok!")
});

app.listen(3000,()=>{
    console.log("Servidor startado!")
});