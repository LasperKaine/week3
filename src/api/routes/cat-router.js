import express from 'express';
import { getCats, postCat } from '../controllers/cat-controller.js';
import { upload } from '../../middlewares/upload.js';
import { authenticateToken } from '../../middlewares/authentication.js';

const catRouter = express.Router();

catRouter.get('/', getCats);
catRouter.post('/', authenticateToken, upload.single('file'), postCat);

export default catRouter;