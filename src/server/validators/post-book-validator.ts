const joi = require("joi");
import jsonResponse from "./response-formatters";
import { Request, Response } from "express";

// const addStocksData = (request:any, response:any, next: () => void) => {

export const addNewBookValidator = (
  request: Request | any,
  response: Response,
  next: () => void
) => {
  const schema = joi.object({
    name: joi.string().required(), // name: string;
    description: joi.string().required(), // description?: string;
    price: joi.number().required(), // price: number;
    publisher: joi.string(), // publisher?: string;
    author: joi.string().required(), // author: string;
    publishedOn: joi.number(), // publishedOn?: Date|number;
  });
  const { error, value } = schema.validate(request.body);
  if (error) {
    console.log("error in validator: ", error);
    return response.status(500).json(jsonResponse(true, {}, error));
  } else {
    request.input = request.body;
  }
  next();
};

export const updateNewBookValidator = (
  request: Request | any,
  response: Response,
  next: () => void
) => {
  const schema = joi.object({
    name: joi.string(), // name: string;
    description: joi.string(), // description?: string;
    price: joi.number(), // price: number;
    publisher: joi.string(), // publisher?: string;
    author: joi.string(), // author: string;
    publishedOn: joi.number(), // publishedOn?: Date|number;
  });
  const { error, value } = schema.validate(request.body);
  if (error) {
    console.log("error in validator: ", error);
    return response.status(500).json(jsonResponse(true, {}, error));
  } else {
    request.input = request.body;
  }
  next();
};
