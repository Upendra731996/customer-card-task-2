

const express =require("express");
const router= express.Router();
const { loginUser, createUser}= require("../Controller/userControler");
const { updatePost, createPost,getpost, deletepost }= require("../Controller/postController");

const {authenticate}= require("../middleware/auth");
const { createComment}= require("../Controller/commentController");


router.post("/register",  createUser)// API for Register


router.post("/login", loginUser )// API for login author
//==========================post rout===============
router.post("/createPost", authenticate, createPost)
router.get("/getpost", authenticate, getpost)
router.put("/updatePost",authenticate , updatePost)
router.put("/deletepost", authenticate, deletepost)
//=================
router.post("/createComment",  createComment)



module.exports= router