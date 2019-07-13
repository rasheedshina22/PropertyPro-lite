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
    purpose,
    status,
    publicID,
    imageUrl,
    createdOn
  ) {
    super(
      id,
      owner,
      price,
      state,
      city,
      address,
      type,
      purpose,
      status,
      publicID,
      imageUrl,
      createdOn
    );
  }

  static save(property) {
    const noOfProperties = properties.length;
    const newOfProperties = properties.push(property);
    return newOfProperties > noOfProperties;
  }

  static async findPropertyById(propId) {
    const property = properties.find(prop => prop.id === parseInt(propId, 10));
    return property;
  }

  static async updateStatus(property) {
    try {
      const index = properties.findIndex(({ id }) => id === property.id);
      properties.splice(index, 1, property);
    } catch (error) {
      throw error;
    }
  }

  static async propertyDelete(property) {
    try {
      const index = properties.findIndex(({ id }) => id === property.id);
      properties.splice(index, 1);
    } catch (error) {
      throw error;
    }
  }
}
