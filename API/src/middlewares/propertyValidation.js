import { check, validationResult } from 'express-validator';
import { states, type, purpose, status } from '../helpers/propertyData';

export default class PostProperty {
  static validate() {
    return [
      check('status')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isIn([...status])
        .withMessage('should be either Available, Sold or Rented')
        .trim(),
      check('price')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isLength({ min: 3, max: 15 })
        .withMessage('should be between 3-15 characters long')
        .trim()
        .matches(/^\d+(\.|\d)\d+$/)
        .withMessage('should be a float or numbers')
        .escape(),
      check('state')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isIn([...states])
        .withMessage('should be one of the states listed')
        .trim(),
      check('city')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isAlpha()
        .withMessage('Should be Alphabets only')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Should be atleast 3 characters long')
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
      check('type')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isIn([...type])
        .withMessage('should be one of the types listed'),
      check('purpose')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isIn([...purpose])
        .withMessage('should be one of the types listed')
    ];
  }
  /* eslint no-param-reassign: 0 */

  static async verifyValidationResult(req, res, next) {
    const errors = validationResult(req);
    let isRequired = false;
    if (!errors.isEmpty()) {
      const validateErrors = errors.array();
      const errorResult = validateErrors.reduce((newErrors, err) => {
        if (err.msg === 'Field is Required') isRequired = true;
        if (err.msg === 'Field cannot be empty') isRequired = true;
        newErrors[err.param] = !newErrors[err.param]
          ? err.msg
          : newErrors[err.param];
        return newErrors;
      }, {});
      if (isRequired)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Some required fields are missing',
          errors: errorResult
        });
      return res.status(400).json({
        status: '400 Bad Request',
        error: 'Your request contains invalid parameters',
        errors: errorResult
      });
    }

    return next();
  }
}
