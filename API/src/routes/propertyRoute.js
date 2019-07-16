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
  ValidateUpdateProperty.validate(),
  ValidateUpdateProperty.verifyValidationResult,
  propertyController.propertyUpdate
);

router.patch(
  '/:propertyId/sold',
  verifyToken,
  authorization,
  propertyController.markPropertyAsSold
);

router.delete(
  '/:propertyId',
  verifyToken,
  authorization,
  propertyController.deleteProperty
);

router.get('/', propertyController.getAllProperties);
router.get('/:propertyId', propertyController.getSingleProperty);

export default router;
