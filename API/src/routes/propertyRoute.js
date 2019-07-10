import { Router } from 'express';
import propertyController from '../controllers/propertyController';
import verifyToken from '../middlewares/myToken';
import ImageUpload from '../middlewares/uploadImage';
import ValidateProperty from '../middlewares/propertyValidation';
import authorization from '../middlewares/myAuthorization';
import ValidateUpdateProperty from '../middlewares/propertyUpdateValidation';

const router = Router();

router.post(
  '/',
  verifyToken,
  ImageUpload.upload,
  ValidateProperty.validate(),
  ValidateProperty.verifyValidationResult,
  propertyController.postProperty
);

router.patch(
  '/:id',
  verifyToken,
  authorization,
  ImageUpload.imageUpdate,
  ValidateUpdateProperty.validate(),
  ValidateUpdateProperty.verifyValidationResult,
  propertyController.propertyUpdate
);

export default router;
