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

const deleteExistingImg = async publicId => {
  const result = await cloudinary.uploader.destroy(publicId, async err => err);
  return result;
};
export { deleteExistingImg, storage };
