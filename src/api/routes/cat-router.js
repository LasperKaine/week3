import express from 'express';
import multer from 'multer';
import { createThumbnail } from '../../middlewares/upload.js';

const catRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/uploads'),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

const postCat = (req, res) => {
  console.log('File info:', req.file);
  res.json({
    message: 'Cat uploaded!',
    file: req.file,
  });
};

// Route
catRouter.post('/', upload.single('image'), createThumbnail, postCat);

export default catRouter;