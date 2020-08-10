const express =require ("express");
const bodyParser = require("body-parser");
const { extend } = require("lodash");
 
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use('view engine' ,ejs);
app.use(express.static("public"));