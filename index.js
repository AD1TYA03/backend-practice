const express = require('express');
const app = express();



app.set('view engine', 'ejs');
app.set('views','views');

const rootDir=require('./util/path');
const path = require('path');


//IMPORTING ROUTES
 const adminRoutes = require('../Backend/routes/admin');
 const shopRoutes = require('../Backend/routes/shop');


//PARSING THE BODY
const bodyParser = require('body-parser');
const { dirname } = require('path');
app.use(bodyParser.urlencoded({extended: false}));


// USING FROM ROUTES

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(rootDir,'/public')));


//UNMATCHED ROUTES ERROR 404 PAGE CALL
const handler404 =require('./controllers/404');
app.use('/', handler404.get404);


app.listen(3001, ()=>{
    console.log("App listening on http://localhost:3001");
})