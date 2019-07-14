import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import db from '../data/db/index';

// Initialize process.env variables
config();

class UserServices extends UserModel {
  constructor(
    id,
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    address,
    isAdmin = false
  ) {
    super(
      id,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      address,
      isAdmin
    );
  }

  static generateToken(id, isAdmin) {
    const token = jwt.sign(
      {
        data: { id, is_admin: isAdmin }
      },
      process.env.SECRET || 'alternativeSecret',
      { expiresIn: '1d' }
    );
    return token;
  }

  static async encrptPassword(password) {
    const pass = await bcrypt.hash(password, 8);
    return pass;
  }

  static async verifyPassword(plainText, hashedText) {
    try {
      const isMatch = await bcrypt.compare(plainText, hashedText);
      return isMatch;
    } catch (error) {
      throw error;
    }
  }

  static async emailExist(emailAddress) {
    const text = `SELECT * FROM users WHERE email = $1`;
    const value = [emailAddress];
    const { rows } = await db.queryArg(text, value);
    return rows[0];
  }

  static async save(user) {
    const text = `
      INSERT INTO users 
      (email, address, first_name , last_name, phone_number, is_admin, password)
      VALUES($1, $2, $3, $4, $5, $6, $7) returning *;
    `;
    const values = [
      user.email,
      user.address,
      user.first_name,
      user.last_name,
      user.phone_number,
      user.is_admin,
      user.password
    ];
    const { rows } = await db.queryArg(text, values);
    return rows[0];
  }

  static async findUserById(userId) {
    const user = users.find(({ id }) => id === parseInt(userId, 10));
    return user;
  }
}
export default UserServices;
