import express from 'express';
import multer from 'multer';
import { createThumbnail } from '../../middlewares/upload.js';
import { getCats, getCat, createCat, deleteCat } from '../controllers/cat-controller.js'; // <-- use these

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/uploads'),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

// Routes
router.get('/', getCats);              // list all cats
router.get('/:id', getCat);            // get single cat
router.post('/', upload.single('image'), createThumbnail, createCat); // add cat
router.delete('/:id', deleteCat);      // remove cat

export default router;