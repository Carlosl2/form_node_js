const express = require('express'); 
const path = require ('path'); 
const morgan = require('morgan'); 
const mysql = require('mysql');
const myConnection = require('express-myconnection'); 

const app = express();

//inport rutas

const customerRoutes  = require('./routes/customer');
const { urlencoded } = require('express');

//import 
app.set('port',process.env.PORT || 3000 );  

//template view
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//midelwares 
app.use(morgan('dev')); 

//taer informacion condificada desde el formulario
app.use(express.urlencoded({extended:false}));

app.use (myConnection (mysql,{
    host: 'localhost',
    user: 'root', 
    password : '', 
    port : 3306, 
    database: 'nodedb' 

},'single' ));

//routes 

app.use('/', customerRoutes); 

//static Files 
app.use(express.static(path.join(__dirname,'public')));

// run server
app.listen(app.get('port'),()=> {

    console.log('Server on port 3000'); 
}); 