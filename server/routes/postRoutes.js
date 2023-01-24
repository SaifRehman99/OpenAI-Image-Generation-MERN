import express from  'express';
import { v2 as cloudinary } from 'cloudinary';
import Post from "../models/post.js";

import * as dotenv from "dotenv";
dotenv.config();


const router = express.Router();


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET, 
  });


router.route('/').get(async(req, res) => {

  try {
    const posts = await Post.find({});
    res.status(200).json({success:true, data: posts});
  } catch (error) {
    res.status(500).json({message: error.message || "Something went wrong..."})
    
  }

}).post(async(req, res) => {
  try {
    const {name, prompt, photo} = req.body;
  const photoURL = await cloudinary.uploader.upload(photo);

  const newPost = await Post.create({
    name, prompt, photo:photoURL.url
  })

  res.status(201).json({success: true, data: newPost})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message || "Something went wrong..."})
  }
})

export default router;