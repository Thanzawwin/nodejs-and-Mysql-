import { findOne } from '../model/Posts';

export const postAdd = (reqBody:any,done:any) =>{
  let { title,author,body } = reqBody;
  if(!title || !body){
    return done('please fill in all fields',false);
  }
  if(author == undefined){
    author = 'unknown';
  }

  findOne('posts',title,(err:any,post:any)=>{
    if(err){
      done('post find one error');
    }else{
      if(post.length > 0){
        done('post title already used please choose another title',false);
      }else{
        //no post
        done(null,{title,author,body});
      }
    }
  })
}