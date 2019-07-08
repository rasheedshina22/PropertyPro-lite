import { Router } from 'express';
import propertyController from '../controllers/propertyController';
import verifyToken from '../middlewares/verifyToken';
import upload from '../middlewares/image-upload';
import PostProperty from '../middlewares/propertyValidation';

const router = Router();

router.post(
  '/',
  verifyToken,
  upload,
  PostProperty.validate(),
  PostProperty.verifyValidationResult,
  propertyController.postProperty
);

export default router;
