import { check, validationResult } from 'express-validator';

export default class PostProperty {
  static validate() {
    return [
      check('type')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Property type field cannot be empty'),
      check('address')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Address field cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Address fiels should be atleast 3 characters long')
        .trim()
        .escape(),
      check('city')
        .optional()
        .not()
        .isEmpty()
        .withMessage('City field cannot be empty')
        .isAlpha()
        .withMessage('City field Should be Alphabets only')
        .trim()
        .isLength({ min: 3 })
        .withMessage('City Should be atleast 3 characters long')
        .escape(),
      check('state')
        .optional()
        .not()
        .isEmpty()
        .withMessage('State cannot be empty')
        .trim(),
      check('price')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Price Field cannot be empty')
        .trim()
        .matches(/^\d+(\.|\d)\d+$/)
        .withMessage('Price field should contain a float or number')
        .escape(),
      check('image_url')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Image Url cannot be empty')
        .trim(),
      check('status')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Status cannot be empty')
        .trim(),
      check('purpose')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Purpose cannot be empty'),
      check('description')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Description cannot be empty')
    ];
  }
  /* eslint no-param-reassign: 0 */

  static async verifyValidationResult(req, res, next) {
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
