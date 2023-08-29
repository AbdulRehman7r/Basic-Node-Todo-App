const express = require("express");
const app = express();
const date = require(`${__dirname}/utils/utils.js`)


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs")

const mTodoes = []


app.post("/",(req,res)=>{
    let todo = req.body.todo
    mTodoes.push(todo)
    res.redirect("/")
})

app.get("/",(req,res)=>{
    res.render("list",{date:date.getDate(),list:mTodoes})
})


app.listen(80,()=>{
    console.log("STarted at port 80");
})