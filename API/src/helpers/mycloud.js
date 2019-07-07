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
export default storage;
