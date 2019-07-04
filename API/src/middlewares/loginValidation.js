import { check, validationResult } from 'express-validator';

export default class Login {
  static validateData() {
    return [
      check('email')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .normalizeEmail()
        .isEmail()
        .withMessage('Should be a valid Email Address'),
      check('password')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isLength({ min: 6 })
        .withMessage('Should be atleast 6 characters Long')
        .trim()
        .escape()
    ];
  }

  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    let isRequiredError = false;
    let isInvalidPasswordError = false;
    if (!errors.isEmpty()) {
      const validateErrors = errors.array();
      validateErrors.forEach(err => {
        if (err.msg === 'Field cannot be empty') isRequiredError = true;
        if (err.msg === 'Invalid Password') isInvalidPasswordError = true;
      });
      if (isRequiredError)
        return res.status(401).json({
          status: '401 Unauthorized',
          error: 'Email or Password field should not be  empty'
        });
      if (isInvalidPasswordError)
        return res.status(401).json({
          status: '401 Unauthorized',
          error: 'Invalid Password'
        });
      return res.status(401).json({
        status: '401 Unauthorized',
        error: 'Invalid Email Address'
      });
    }

    return next();
  }
}
