const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require("ejs");



const cameraRoutes = require('./routes/camera');
const teddyRoutes = require('./routes/teddy');
const furnitureRoutes = require('./routes/furniture');

const app = express();
const http = require('http');



mongoose.connect(
  'mongodb+srv://will:nAcmfCoHGDgzrCHG@cluster0-pme76.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(bodyParser.json());

app.use('/api/cameras', cameraRoutes);
app.use('/api/teddies', teddyRoutes);
app.use('/api/furniture', furnitureRoutes);

module.exports = app;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')));

//-------------------------------------------------------------------------------------------------------------
//array for allitem
let allItems =[{}];

//get for view page
app.get("/", function(req, res){
  
 const api ="http://localhost:3000/api/cameras";
//view page http request
   http.get(api,function(responce){
    
responce.on("data",function(data){
const allProducts = JSON.parse(data);
allItems = allProducts;

 

});
//connect the ejs ------------------------------------------------------------------------------------------
  res.render("viewpage",{
    allproducts:allItems
  });
 
});
});
// when click link to the single product page-----------------------------------------------------------------------------
app.get("/aboutpage/:itemId" ,function(req,res){
 //route params--------------------------------------------------------------------------------------
  const requestedId = req.params.itemId;
  
 //access allItems array------------------------------------------------------------------------------------
  allItems.forEach(function(ProductID){
   const storedId  = ProductID._id ;
    if (storedId === requestedId) {
      res.render("aboutPage", {
        imageUrl:ProductID.imageUrl,
        name: ProductID.name,
        price: ProductID.price,
        description :ProductID.description,
        lenses:ProductID.lenses,
        itemId:storedId
      });
      
    }
   
});
  


});

 //render cartPage ---------------------------------------------------------------------
app.get("/cartpage" ,function(req,res){
  res.render('cartpage',{
    
  });
});

app.get("/checkoutpage" ,function(req,res){
  res.render('checkoutpage',{
    
  });
});

app.post("/checkoutpage" ,function(req,res){
 

 const userInform = {
userFirstName : req.body.firstName ,
userLastName :req.body.lastName,

userAddress :req.body.address,
userAddress2:req.body.address2,
userCountry:req.body.country,
userPostcode:req.body.postCode,
userEmail:req.body.email


 };
 
 
});
