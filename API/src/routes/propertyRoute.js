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
  '/:property_id',
  verifyToken,
  authorization,
  ImageUpload.imageUpdate,
  ValidateUpdateProperty.validate(),
  ValidateUpdateProperty.verifyValidationResult,
  propertyController.propertyUpdate
);

router.patch(
  '/:property_id/sold',
  verifyToken,
  authorization,
  propertyController.markPropertyAsSold
);

router.delete(
  '/:property_id',
  verifyToken,
  authorization,
  propertyController.deleteProperty
);

router.get('/', verifyToken, propertyController.getAllProperties);
router.get('/:property_id', verifyToken, propertyController.getSingleProperty);

export default router;
