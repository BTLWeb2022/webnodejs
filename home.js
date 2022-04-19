const path = require('path');
const express = require('express')
const app = express();
var multer = require('multer');
var upload = multer();


app.use(express.json({extended: false}));
app.use(express.static('./views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views','./views');

var list = {

}

var i = 0

app.get("/home",(req,res)=>{
    res.render('index',{data:i})
})

app.get("/add/product",(req,res)=>{
    i++
    res.redirect('/home')
})


app.listen(3000,()=>{
    console.log("Server is start on port 3000")
})