const express=require("express");
const app=express();
require("dotenv").config();
const hbs = require("hbs");
const path = require("path");
//this line is also important even also for dynamic websites. It will load css files and images
// console.log(__dirname)
const staticPath = path.join(__dirname, "../public");
// console.log(staticPath);

const partialPath = path.join(__dirname, "../partials");

app.use(express.json());
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

//this line is also important even also for dynamic websites. It will load css files and images
app.use(express.static(staticPath));

//to register partials
hbs.registerPartials(partialPath);

app.get("/",async(req,res)=>{
    try {
        res.send(`App is running. ${process.env.app}`);
    } catch (error) {
        res.send(error)
    }
})

app.get("/home",async(req,res)=>{
    try {
        res.render("home");
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000,()=>{
    console.log("App is running in port 3000")
})