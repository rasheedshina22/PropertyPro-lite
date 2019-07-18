import { check, validationResult } from 'express-validator';

export default class Login {
  static validateData() {
    return [
      check('email')
        .exists()
        .withMessage('Email is Required')
        .isEmail()
        .withMessage('Kindly put a valid Email Address'),
      check('password')
        .exists()
        .withMessage('Password  is Required')
        .trim()
        .escape()
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
}
