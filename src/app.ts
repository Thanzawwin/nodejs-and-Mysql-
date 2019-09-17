import express from "express";
import * as bodyParser from 'body-parser';
import * as path from 'path';

//config
import { db,createTable } from './config/database';

//init
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit:'1mb',
  parameterLimit:1000000,
  extended:true
}))

//db
db().connect((err,data)=>{
  if(err){
    console.log(`${err.sqlMessage}: please create database`);
    
  }else{
    console.log('mysql connected');
    //create table
    // createTable((error:any) => console.log(error));
  }
})



//static folder
app.use(express.static(path.join(__dirname,'public')));

//routes
import postRoutes from './routes/post';

app.use('/api/post',postRoutes);


//server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
