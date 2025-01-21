const express = require("express");

const {AddBookStoreData,GetBookStoreData,GetSingleBookStoreData,EditBookStoreData,DeleteBookStoreData} = require('../Controller/bookController') 
const userRouter = express.Router();

userRouter.post("/addBookStoreData", AddBookStoreData);

userRouter.get("/getBookStoreData", GetBookStoreData);

userRouter.get("/getSingleBookStoreData/:id", GetSingleBookStoreData);

userRouter.put("/updateBookStoreData/:id", EditBookStoreData);

userRouter.delete("/deleteBookStoreData/:id", DeleteBookStoreData);

module.exports = userRouter;        
