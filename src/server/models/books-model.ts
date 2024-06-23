import { Schema, model, Document } from "mongoose";

interface IBooks extends Document {
  name: string;
  description?: string;
  price: number;
  publisher?: string;
  author: string;
  publishedOn?: Date|number;
  createdOn?: Date;
}

const booksSchema = new Schema<IBooks>({
  name: {
    type: String,
    text: true,
    required: true,
  },
  description: {
    type: String,
    text: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    text: true,
    required: true,
  },
  publishedOn: {
    type: Date,
    default: Date.now,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const bookModel = model<IBooks>("books", booksSchema);

export default bookModel
