import PropertyModel from '../models/propertyModel';
import properties from '../data/data-structure/properties';
import UserServices from './userServices';
import db from '../data/db/index';

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

  static async getStateID(state) {
    const text = `SELECT * FROM states WHERE name = $1`;
    const value = [state];
    const { rows } = await db.queryArg(text, value);
    if (rows[0]) return rows[0];
    const text1 = `
      INSERT INTO states 
      (name)
      VALUES($1) returning *;
    `;
    const value1 = [state];
    const result = await db.queryArg(text1, value1);
    return result.rows[0];
  }

  static async getTypeID(type) {
    const text = `SELECT * FROM types WHERE name = $1`;
    const myType = type.toLowerCase();
    const value = [myType];
    const { rows } = await db.queryArg(text, value);
    if (rows[0]) return rows[0];
    const text1 = `
      INSERT INTO types 
      (name)
      VALUES($1) returning *;
    `;
    const value1 = [myType];
    const result = await db.queryArg(text1, value1);
    return result.rows[0];
  }

  static async getTypeID1(type) {
    const text = `SELECT * FROM types WHERE name = $1`;
    const myType = type.toLowerCase();
    const value = [myType];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async getPurposeID(purpose) {
    const text = `SELECT * FROM purposes WHERE name = $1`;
    const value = [purpose];
    const { rows } = await db.queryArg(text, value);
    if (rows[0]) return rows[0];
    const text1 = `
      INSERT INTO purposes 
      (name)
      VALUES($1) returning *;
    `;
    const value1 = [purpose];
    const result = await db.queryArg(text1, value1);
    return result.rows[0];
  }

  static async save(property) {
    const text = `
      INSERT INTO properties 
      (owner, price, state , city, address, type, image_url, public_id, purpose)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *;
    `;
    const values = [
      property.owner,
      property.price,
      property.state,
      property.city,
      property.address,
      property.type,
      property.image_url,
      property.public_id,
      property.purpose
    ];
    const { rows } = await db.queryArg(text, values);
    return rows[0];
  }

  static async findPropertyById(propId) {
    const text = `SELECT * FROM properties WHERE id = $1`;
    const value = [propId];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async propertyUpdate(id, price) {
    const text = `UPDATE properties SET price = $1,updated_on = $2 WHERE id =$3 returning *`;
    const currentTime = new Date().toLocaleString();
    const value = [price, currentTime, id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async getStatus(id) {
    const text = `SELECT name FROM status WHERE id = $1`;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async getType(id) {
    const text = `SELECT name FROM types WHERE id = $1`;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async getState(id) {
    const text = `SELECT name FROM states WHERE id = $1`;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async getPurpose(id) {
    const text = `SELECT name FROM purposes WHERE id = $1`;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async markAsSold(id) {
    const text = `UPDATE properties SET status = $1 WHERE id =$2 returning *`;
    const value = ['2', id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async propertyDelete(id) {
    const text = `DELETE FROM properties WHERE id = $1`;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  /* eslint camelcase : 0 */

  static async getAll() {
    const text = `SELECT

    properties.id, 
    status.name status, 
     types.name "type", 
    states.name state, 
    properties.city, 
    properties.address, 
     properties.price, 
    properties.created_on, 
    properties.image_url, 
     users.email owner_email, 
     users.phone_number owner_phone_number, 
     purposes.name purpose,
    properties.description
 
 FROM 
    properties 
 INNER JOIN status ON status.id = properties.status 
 INNER JOIN states ON states.id = properties.state 
 INNER JOIN types ON types.id = properties.type 
 INNER JOIN purposes ON purposes.id = properties.purpose 
 INNER JOIN users ON users.id = properties.owner; 
 `;
    const { rows } = await db.queryRaw(text);
    return rows;
  }

  static async getByType(type) {
    const text = `SELECT

    properties.id, 
    status.name status, 
     types.name "type", 
    states.name state, 
    properties.city, 
    properties.address, 
     properties.price, 
    properties.created_on, 
    properties.image_url, 
     users.email owner_email, 
     users.phone_number owner_phone_number, 
     purposes.name purpose,
    properties.description
 
 FROM 
    properties 
 INNER JOIN status ON status.id = properties.status 
 INNER JOIN states ON states.id = properties.state 
 INNER JOIN types ON types.id = properties.type 
 INNER JOIN purposes ON purposes.id = properties.purpose 
 INNER JOIN users ON users.id = properties.owner
 
 WHERE type = $1;
 `;
    const { id } = await Property.getTypeID1(type);
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows;
  }

  static async getMySingleProperty(id) {
    const text = `
    SELECT
    properties.id,
    status.name status,
	  types.name "type",
    states.name state,
    properties.city,
    properties.address,
	  properties.price,
    properties.created_on,
    properties.image_url,
    users.email owner_email,
	  users.phone_number owner_phone_number,
	  purposes.name purpose,
    
 FROM
    properties
 INNER JOIN status ON status.id = properties.status
 INNER JOIN states ON states.id = properties.state
 INNER JOIN types ON types.id = properties.type
 INNER JOIN purposes ON purposes.id = properties.purpose
 INNER JOIN users ON users.id = properties.owner
 WHERE properties.id = $1
 `;
    const value = [id];
    const { rows } = await db.queryArg(text, value);
    return rows;
  }
}
