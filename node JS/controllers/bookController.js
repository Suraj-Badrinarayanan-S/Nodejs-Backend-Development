const express = require('express');
const Book = require('../models/book');
const getAllBooks = async(req,res) => {
  try{
    const allBooks = await Book.find({});
    if(allBooks.length > 0) {
      res.status(200).json(allBooks);
    }
    else{
      res.status(404).json({message: "No books found"});
    }
  }
  catch(e) {
    console.log(e);
  }
}

const getBookByID = async(req,res) => {
  try{
    const bookID = req.params.id;
    const book = await Book.findById(bookID);
    if(!book) {
      res.status(404).json({message: "Book not found"});
    }
    else{
      res.status(200).json(book);
    }
  }
  catch(e) {
    console.log(e);
  }
}

const addBook = async(req,res) => {
  try{
    const newBookData = req.body;
    const newBook = await Book.create(newBookData);
    if(newBook) {
      res.status(201).json(
      {
      message:"Book added successfully",
      data: newBook,
      });
    }
    else{
      res.status(400).json(
      {
        message:"Failed to add book",
      });
    }
  }
  catch (err){
    console.log(err);
    res.status(500).json(
    {
      message:"Internal server error",
    });
  }
}

const updateBookByID = async(req,res) => {
  const bookID = req.params.id;
  const bookData = req.body;
  try{
    const book = await Book.findByIdAndUpdate(bookID,bookData,{new:true});
    if(book) {
      res.status(200).json(book);
    }
  }
  catch(e) {
    console.log(e);
  }
}

const deleteBookByID = async(req,res) => {
  const bookID = req.params.id;
  try{
    const book = await Book.findByIdAndDelete(bookID);
    if(book) {
      res.status(200).json('book deleted successfully',book);
    }
  }
  catch(e) {
    console.log(e);
  }
}

module.exports = { getAllBooks, getBookByID, addBook, updateBookByID, deleteBookByID };