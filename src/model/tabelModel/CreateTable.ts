import { db } from '../../config/database';
import { Post } from '../../interfaces/post.interface';

//post
export const PostTable = (done:any) =>{
  let tableName = 'posts';
  //search table
  let find = `SELECT * FROM ${tableName}`;
  db().query(find,(err)=>{
    if(err){
      let sql = `CREATE TABLE ${tableName} ( 
      id INT AUTO_INCREMENT,
      title VARCHAR(200) NOT NULL,
      author VARCHAR(200) DEFAULT 'unknown',
      body TEXT NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
    ) `;
    //create
    db().query(sql,err => {
      if(err){
        done(err)
      }else{
        done(`${tableName} table created`);
      }
    });
    }
  })

  
  
}

//category
export const CategoryTable = (done:any) =>{
  let tableName = 'categorys';
  //search table
  let find = `SELECT * FROM ${tableName}`;
  db().query(find,(err)=>{
    if(err){
      let sql = `CREATE TABLE ${tableName} ( 
      id INT AUTO_INCREMENT,
      name VARCHAR(200) NOT NULL,
      postId INT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id),
      FOREIGN KEY(postId) REFERENCES posts(id)
    ) `;
    //create
    db().query(sql,err => {
      if(err){
        done(err)
      }else{
        done(`${tableName} table created`);
      }
    });
    }
  })

  
  
}

//Tags
export const TagTable = (done:any) =>{
  let tableName = 'tags';
  //search table
  let find = `SELECT * FROM ${tableName}`;
  db().query(find,(err)=>{
    if(err){
      let sql = `CREATE TABLE ${tableName} ( 
      id INT AUTO_INCREMENT,
      name VARCHAR(200) NOT NULL,
      postId INT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id),
      FOREIGN KEY(postId) REFERENCES posts(id)
    ) `;
    //create
    db().query(sql,err => {
      if(err){
        done(err)
      }else{
        done(`${tableName} table created`);
      }
    });
    }
  })

  
  
}

//Files
export const FileTable = (done:any) =>{
  let tableName = 'files';
  //search table
  let find = `SELECT * FROM ${tableName}`;
  db().query(find,(err)=>{
    if(err){
      let sql = `CREATE TABLE ${tableName} ( 
      id INT AUTO_INCREMENT,
      name VARCHAR(200) NOT NULL,
      filename VARCHAR(200) NOT NULL,
      type VARCHAR(200) NOT NULL,
      size VARCHAR(200) NOT NULL,
      postId INT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id),
      FOREIGN KEY(postId) REFERENCES posts(id)
    ) `;
    //create
    db().query(sql,err => {
      if(err){
        done(err)
      }else{
        done(`${tableName} table created`);
      }
    });
    }
  })

  
  
}

//User
export const UserTable = (done:any) =>{
  let tableName = 'users';
  //search table
  let find = `SELECT * FROM ${tableName}`;
  db().query(find,(err)=>{
    if(err){
      let sql = `CREATE TABLE ${tableName} ( 
      id INT AUTO_INCREMENT,
      name VARCHAR(200) NOT NULL,
      username VARCHAR(200) NOT NULL,
      email VARCHAR(200) NOT NULL,
      password VARCHAR(200) NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
    ) `;
    //create
    db().query(sql,err => {
      if(err){
        done(err)
      }else{
        done(`${tableName} table created`);
      }
    });
    }
  })

  
  
}

