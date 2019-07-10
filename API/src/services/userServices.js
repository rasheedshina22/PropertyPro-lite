import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import users from '../data/data-structure/users';

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

  static save(user) {
    const noOfUsers = users.length;
    const newNoOfUsers = users.push(user);
    return newNoOfUsers > noOfUsers;
  }

  static async emailExist(emailAddress) {
    const user = users.find(({ email }) => {
      return email === emailAddress;
    });
    return user;
  }
}
export default UserServices;
