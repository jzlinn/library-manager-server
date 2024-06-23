import express, { Router } from "express";
const router: Router = express.Router();
import {
  getAllBooks,
  addNewBook,
  updateBookByID,
  deleteBookByID,
} from "../services/library-services";
import {
  addNewBookValidator,
  updateNewBookValidator,
} from "../validators/post-book-validator";

router.get("/get-all-books", getAllBooks);
router.post("/save-book/new", addNewBookValidator, addNewBook);
router.get("/update-book/:id", updateNewBookValidator, updateBookByID);
router.delete("/delete-book/:id", deleteBookByID);

export default router;
