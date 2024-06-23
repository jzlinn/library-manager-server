import bookModel from "../models/books-model";

export const fetchAllBooksHelper = async (
  query: any,
  fields: any
): Promise<any> => {
  try {
    const books = await bookModel
      .find()
      .skip((query.page - 1) * query.limit)
      .limit(query.limit);

    const totalBooks = await bookModel.countDocuments();
    const totalPages = Math.ceil(totalBooks / query.limit);

    let booksData = {
      totalBooks,
      totalPages,
      currentPage: query.page,
      books,
    };
    return booksData;
  } catch (error) {
    return error;
  }
};

export const saveNewBookEntry = async (books: any) => {
  try {
    let newBookData = new bookModel(books);
    let bookData = await newBookData.save();
    return bookData;
  } catch (error) {
    return error;
  }
};

export const deleteBookCheckParam = async (check: any) => {
  try {
    let inventoryData = await bookModel.deleteOne(check);
    return inventoryData;
  } catch (error) {
    return error;
  }
};

export const updateBookByCheckParam = async (check: any, fields: any) => {
  try {
    const updates = await bookModel.updateOne(check, fields);
    return updates;
  } catch (error) {
    return error;
  }
};
