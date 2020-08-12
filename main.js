const express =require ("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const http = require('http');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


 let allItem =[];
app.get("/", function(req, res){
  res.render("viewpage",{
    allproducts:allItem
  });
   const url ="http://localhost:3000/api/cameras";

   http.get("url",function(responce){
    
responce.on("data",function(data){
const allProduct = JSON.parse(data);
dispplayItem(allProduct);

});
   });
  });
  
function dispplayItem(array){
  for (let i = 0; i < array.length; i++) {
    let allItem ={
      image:array[i].imageUrl,
      name:array[i].name,
      price:array[i].price
    }
}
allItem.push(allItem);
};





app.listen( process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
   