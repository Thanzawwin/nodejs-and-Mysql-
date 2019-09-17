import * as express from 'express';
//common
import { postAdd } from '../common/post';

import { Post } from '../interfaces/post.interface';

const router = express.Router();

//model
import { 
  findAll,
  findOne,
  findById,
  add,
  update,
  del
 } from '../model/Posts';



//@Get All
router.get('/',(req,res)=>{
  findAll('posts',(err:any,data:any)=>{
    res.json(data);
  })
})

//Get One
router.get('/:id',(req,res)=>{
  let id = req.params.id;
  findById('posts',id,(err:any,data:any)=>{
    if(err){
      res.status(404).send('post one error');
    }else{
      res.json(data);
    }
  })
})

//Post Add
router.post('/',(req,res)=>{
  postAdd(req.body,(err:boolean,reqPost:Post)=>{
    if(err){
      res.status(400).send(err);
    }else{
      //pass
      add('posts',reqPost,(err:any,data:any)=>{
        if(err){
          res.status(400).send('post add error');
        }else{
          //added
          res.status(201).send('post added');
        }
      })
    }
  })
})

//post update
router.put('/:id',(req,res)=>{
  let id = req.params.id;
  update('posts',id,req.body,(err:any,data:any)=>{
     if(err){
      res.status(404).send('post update error');
    }else{
      res.json(data);
    }
  })
})

//post delete
router.delete('/:id',(req,res)=>{
  let id = req.params.id;

  del('posts',id,(err:any,data:any)=>{
    if(err){
      res.status(404).send('post delete error');
    }else{
      res.json(data);
    }
  })
})

export default router;