import { Router } from 'express';
import propertyController from '../controllers/propertyController';
import verifyToken from '../middlewares/verifyToken';
import upload from '../middlewares/image-upload';

const router = Router();

router.post('/', verifyToken, upload, propertyController.postProperty);

export default router;
