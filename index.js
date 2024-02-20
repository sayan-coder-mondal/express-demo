const express=require("express");
const app=express();
app.get("/",async(req,res)=>{
    try {
        res.send("App is running");
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000,()=>{
    console.log("App is running in port 3000")
})