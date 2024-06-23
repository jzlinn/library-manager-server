import {
  deleteBookCheckParam,
  fetchAllBooksHelper,
  saveNewBookEntry,
  updateBookByCheckParam,
} from "@src/server/helpers/books-helper";

import { Request, Response } from "express";


export const getAllBooks = async (request: Request, response: Response) => {
  try {
    let booksData = await fetchAllBooksHelper(request.query, {});
    response.status(200).json(booksData);
  } catch (error) {
    console.error("error cought @ getAllBooks : ", error);
  }
};

export const addNewBook = async (request: Request, response: Response) => {
  try {
    let newBookData = {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      publisher: request.body.publisher,
      author: request.body.author,
      publishedOn: new Date(request.body.publishedOn),
    };
    const saveBook = await saveNewBookEntry(newBookData);
    if (saveBook.id) response.status(201).json(saveBook);
    else response.status(500).json({ message: "Operation failed" });
  } catch (error) {
    console.error("error cought @ addNewBook : ", error);
  }
};

export const updateBookByID = async (request: Request, response: Response) => {
  try {
    let updateBook = await updateBookByCheckParam(
      { _id: request.params.id },
      request.body
    );
    if (updateBook._id) response.status(201).json(updateBook);
    else response.status(500).json({ message: "Operation failed" });
  } catch (error) {
    console.error("error cought @ getAllBooks : ", error);
  }
};

export const deleteBookByID = async (request: Request, response: Response) => {
  try {
    let deleteBook = await deleteBookCheckParam({
      _id: request.params.id,
    });
    if (deleteBook._id) response.status(201).json(deleteBook);
    else response.status(500).json({ message: "Operation failed" });
  } catch (error) {
    console.error("error cought @ getAllBooks : ", error);
  }
};
