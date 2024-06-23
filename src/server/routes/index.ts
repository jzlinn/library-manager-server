import express, { Router } from "express";
const router: Router = express.Router();

import libraryRouter from './library-router';

router.use('/library', libraryRouter);

export default router

