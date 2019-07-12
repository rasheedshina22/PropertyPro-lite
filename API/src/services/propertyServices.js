import PropertyModel from '../models/propertyModel';
import properties from '../data/data-structure/properties';
import UserServices from './userServices';

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
  /* eslint camelcase : 0 */

  static async getAll() {
    try {
      const myProperties = properties.map(
        async ({
          id,
          owner,
          price,
          state,
          city,
          address,
          type,
          purpose,
          status,
          image_url,
          created_on
        }) => {
          const {
            email: ownerEmail,
            phoneNumber: ownerPhoneNumber
          } = await UserServices.findUserById(owner);
          return {
            id,
            status,
            type,
            state,
            city,
            address,
            price,
            created_on,
            image_url,
            ownerEmail,
            ownerPhoneNumber,
            purpose
          };
        }
      );
      const result = await Promise.all(myProperties);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getByType(propertyType) {
    try {
      const propertyByType = properties.filter(item => {
        return item.type.toLowerCase() === propertyType.toLowerCase();
      });
      const myProperties = propertyByType.map(
        async ({
          id,
          owner,
          price,
          state,
          city,
          address,
          type,
          purpose,
          status,
          image_url,
          created_on
        }) => {
          const {
            email: ownerEmail,
            phoneNumber: ownerPhoneNumber
          } = await UserServices.findUserById(owner);
          return {
            id,
            status,
            type,
            state,
            city,
            address,
            price,
            created_on,
            image_url,
            ownerEmail,
            ownerPhoneNumber,
            purpose
          };
        }
      );
      const result = await Promise.all(myProperties);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getMySingleProperty(propertyID) {
    try {
      const propertyByID = properties.filter(item => {
        return parseInt(item.id, 10) === parseInt(propertyID, 10);
      });
      const myProperty = propertyByID.map(
        async ({
          id,
          owner,
          price,
          state,
          city,
          address,
          type,
          purpose,
          status,
          image_url,
          created_on
        }) => {
          const {
            email: ownerEmail,
            phoneNumber: ownerPhoneNumber
          } = await UserServices.findUserById(owner);
          return {
            id,
            status,
            type,
            state,
            city,
            address,
            price,
            created_on,
            image_url,
            ownerEmail,
            ownerPhoneNumber,
            purpose
          };
        }
      );
      const result = await Promise.all(myProperty);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
