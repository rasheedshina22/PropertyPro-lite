import { check, validationResult } from 'express-validator';
import UserServices from '../services/userServices';

export default class SignUp {
  static validateData() {
    return [
      check(['first_name', 'last_name'])
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isAlpha()
        .withMessage('Should be Alphabets only')
        .isLength({ min: 3 })
        .withMessage('Should be atleast 3 characters long')
        .trim()
        .escape(),
      check('address')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isLength({ min: 5 })
        .withMessage('Should be atleast 3 characters long')
        .trim()
        .escape(),
      check('email')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .normalizeEmail()
        .isEmail()
        .withMessage('Should be a valid Email Address'),
      check('confirm_password')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty'),
      check('password')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isLength({ min: 6 })
        .withMessage('Should be atleast 6 characters Long')
        .custom((value, { req }) => value === req.body.confirm_password)
        .withMessage('should match the confirm Password field')
        .trim()
        .escape(),
      check('phoneNumber')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isNumeric()
        .withMessage(
          'Should be plain numbers without a country code or a + sign'
        )
        .isLength({ max: 11, min: 9 })
        .withMessage('Should be atleast 9-11 characters')
    ];
  }

  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: '400 Invalid Request',
        error: 'Your request contains invalid parameters'
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
