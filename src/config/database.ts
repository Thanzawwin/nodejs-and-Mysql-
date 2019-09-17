import { createConnection } from "mysql";

//create table
import { 
  PostTable,
  CategoryTable,
  FileTable,
  TagTable,
  UserTable 
} from '../model/tabelModel/CreateTable';

const dbName = 'blog_v1';
//main db
export const db = () =>{
  return  createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:dbName
  });
}

//create table init app
export const createTable = (done:any)=>{
  PostTable(done);
  CategoryTable(done);
  TagTable(done);
  FileTable(done);
  UserTable(done);

}