const express = require('express');
var cors = require('cors')  ;
const bodyParser = require('body-parser');
const {connectToDB} = require('./dbRegistro');


const app = express()  

app.use(cors());
app.use(bodyParser.json())  ;
{connectToDB()}  ;
const RegistroRoutes = require ('./Routes/RegistroRoutes')(app)




app.listen(3000, ()=>{

    console.log('¡Nos hemos conectado!')

} )
