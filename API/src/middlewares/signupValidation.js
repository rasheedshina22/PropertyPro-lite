import { check, validationResult } from 'express-validator';
import UserServices from '../services/userServices';

export default class SignUp {
  static validateData() {
    return [
      check('first_name')
        .exists()
        .withMessage('First Name is Required')
        .not()
        .isEmpty()
        .withMessage('First Name cannot be empty')
        .isAlpha()
        .withMessage('First Name Should be Alphabets only')
        .isLength({ min: 3 })
        .withMessage('First Name Should be at least 3 characters long')
        .trim()
        .escape(),
      check('last_name')
        .exists()
        .withMessage('Last Name is Required')
        .not()
        .isEmpty()
        .withMessage('Last Name cannot be empty')
        .isAlpha()
        .withMessage('Last Name Should be Alphabets only')
        .isLength({ min: 3 })
        .withMessage('Last Name be at least 3 characters long')
        .trim()
        .escape(),
      check('address')
        .exists()
        .withMessage('Address is Required')
        .not()
        .isEmpty()
        .withMessage('Address cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Address should be atleast 3 characters long')
        .trim()
        .escape(),
      check('description')
        .exists()
        .withMessage('Brief description of your firm is Required')
        .not()
        .isEmpty()
        .withMessage('Description cannot be empty')
        .isLength({ min: 20 })
        .withMessage('Description should be atleast 3 characters long')
        .trim()
        .escape(),
      check('email')
        .exists()
        .withMessage('Email is Required')
        .not()
        .isEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email Should be a valid Email Address'),
      check('confirm_password')
        .exists()
        .withMessage('Confirm Password is Required')
        .not()
        .isEmpty()
        .withMessage('Confirm Password cannot be empty')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Confirm password should match the original Password'),
      check('password')
        .exists()
        .withMessage('Password is Required')
        .not()
        .isEmpty()
        .withMessage('Password cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Password Should be at least 3 characters Long')
        .trim()
        .escape(),
      check('phone_number')
        .exists()
        .withMessage('Phone Number Field is Required')
        .not()
        .isEmpty()
        .withMessage('Phone Number cannot be empty')
        .isNumeric()
        .withMessage(
          'Phone Numbers Should be plain numbers without a country code or a + sign'
        )
    ];
  }

  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArr = errors.array().map(({ msg }) => msg);
      return res.status(400).json({
        status: '400 Invalid Request',
        error: 'Your request contains invalid parameters',
        errors: errArr
      });
    }

    return next();
  }

  static async EmailAlreadyExist(req, res, next) {
    const { email } = req.body;
    const user = await UserServices.emailExist(email);
    if (user)
      return res.status(409).json({
        status: '409 Conflict',
        error: 'Email address already exists'
      });
    return next();
  }
}
