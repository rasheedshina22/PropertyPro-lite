import { Router } from 'express';
import AuthController from '../controllers/authController';
import SignUp from '../middlewares/signupValidation';
import Login from '../middlewares/loginValidation';

const router = Router();

router.post(
  '/signup',
  SignUp.validateData(),
  SignUp.myValidationResult,
  SignUp.EmailAlreadyExist,
  AuthController.createAccount
);

router.post(
  '/signin',
  Login.validateData(),
  Login.myValidationResult,
  AuthController.login
);

export default router;
