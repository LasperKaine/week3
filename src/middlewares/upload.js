import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const { path: filePath, originalname } = req.file;
    const ext = path.extname(originalname); // .jpg, .png, etc
    const nameWithoutExt = path.basename(originalname, ext);

    const thumbFilename = `${nameWithoutExt}_thumb.png`;
    const thumbPath = path.join(path.dirname(filePath), thumbFilename);

    await sharp(filePath)
      .resize(160, 160)
      .png()
      .toFile(thumbPath);

    console.log(`Thumbnail saved: ${thumbPath}`);
    req.file.thumbnail = thumbPath;

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export { createThumbnail };