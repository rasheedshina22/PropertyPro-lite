import { Router } from 'express';
import propertyController from '../controllers/propertyController';
import verifyToken from '../middlewares/myToken';
import ImageUpload from '../middlewares/uploadImage';
import ValidateProperty from '../middlewares/propertyValidation';

const router = Router();

router.post(
  '/',
  verifyToken,
  ImageUpload.upload,
  ValidateProperty.validate(),
  ValidateProperty.verifyValidationResult,
  propertyController.postProperty
);

export default router;
