import multer from 'multer';
import { storage, deleteExistingImg } from '../helpers/mycloud';
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
          error: 'Image should not exceed 900kb'
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

  static async imageUpdate(req, res, next) {
    const multerUpload = multer({
      storage,
      limits: { files: 1, fileSize: 900000 }
    }).single('image');
    multerUpload(req, res, async err => {
      if (err instanceof multer.MulterError)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Image should not exceed 900kb'
        });
      if (err)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Invalid File Format'
        });
      if (req.file) {
        const { public_id: image_id } = req.prop;
        const { result } = await deleteExistingImg(image_id);
        if (result !== 'ok' && result !== 'not found')
          return res.status(500).json({
            status: '500 Server Interval Error',
            error: 'Oops! Error Occcured, try again'
          });
        const { url, public_id } = req.file;
        req.prop.image_url = url;
        req.prop.image_id = public_id;
      }
      return next();
    });
  }
}
