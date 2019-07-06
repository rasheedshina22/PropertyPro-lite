import PropertyModel from '../models/propertyModel';
import properties from '../data/data-structure/properties';

export default class Property extends PropertyModel {
  constructor(
    id = null,
    owner,
    price,
    state,
    city,
    address,
    type,
    imageUrl,
    purpose,
    createdOn,
    status
  ) {
    super(
      id,
      owner,
      price,
      state,
      city,
      address,
      type,
      imageUrl,
      purpose,
      createdOn,
      status
    );
  }

  static save(property) {
    const noOfProperties = properties.length;
    const newOfProperties = properties.push(property);
    return newOfProperties > noOfProperties;
  }
}
