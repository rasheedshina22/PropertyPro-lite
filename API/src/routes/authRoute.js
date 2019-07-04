import { Router } from 'express';
import AuthController from '../controllers/authController';
import SignUp from '../middlewares/signupValidation';

const router = Router();

router.post(
  '/signup',
  SignUp.validateData(),
  SignUp.myValidationResult,
  SignUp.EmailAlreadyExist,
  AuthController.createAccount
);

router.post('/signin', AuthController.login);

export default router;
