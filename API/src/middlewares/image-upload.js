import multer from 'multer';
import { config } from 'dotenv';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';

config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// configure cloud storage
const storage = cloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
  format: 'png',
  folder: 'property/images'
});

const upload = (req, res, next) => {
  const multerUpload = multer({
    storage,
    limits: { files: 1, fileSize: 1000000 }
  }).single('image');
  multerUpload(req, res, err => {
    if (err instanceof multer.MulterError)
      return res.status(400).json({
        status: '400 Bad Request',
        error: 'Image should not exceed 1mb'
      });

    if (err)
      return res.status(400).json({
        status: '400 Bad Request',
        error: 'Invalid File Format'
      });
    return next();
  });
};

export default upload;
