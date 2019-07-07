import multer from 'multer';
import storage from '../helpers/mycloud';
/* eslint camelcase: 0 */
export default class ImageUpload {
  static upload(req, res, next) {
    const multerUpload = multer({
      storage,
      limits: { files: 1, fileSize: 900000 }
    }).single('image');
    multerUpload(req, res, error => {
      if (error instanceof multer.MulterError) {
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Image should not exceed 750kb'
        });
      }
      if (error)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Invalid File Format'
        });
      if (!req.file)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'An Image is Required'
        });
      return next();
    });
  }
}
