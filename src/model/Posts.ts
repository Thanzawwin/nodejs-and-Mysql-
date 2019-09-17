import { db } from '../config/database';

//all
export const findAll = (name:string,done:any) =>{
  let sql = `SELECT * FROM ??`;
  //search
  db().query(sql,name,done);
}

//findbyid
export const findById = (name:string,id:string,done:any) => {
  let sql = `SELECT * FROM ?? WHERE id= ? `;

  db().query(sql,[name,id],done);
}

//one
export const findOne = (name:string,one:string,done:any) => {
  let sql = `SELECT * FROM ?? WHERE title= ? `;

  db().query(sql,[name,one],done);
}

//add
export const add = (name:string,data:any,done:any) =>{
  let sql = `INSERT INTO ${name} SET ? `;

  db().query(sql,data,done);
}

//update
export const update = (name:string,id:string,data:any,done:any) =>{
  let sql = `UPDATE ${name} SET ? WHERE id='${id}' `;

  db().query(sql,data,done);
}

//delete
export const del = (name:string,id:string,done:any) =>{
  let sql = `DELETE FROM ${name} WHERE id=? `;

  db().query(sql,id,done);
}
