import faker from 'faker';
import userServices from '../services/userServices';

//  valid user data
const user = {
  email: 'okadr@gmail.com',
  first_name: 'emeka',
  last_name: 'okafor',
  password: '1234567',
  confirm_password: '1234567',
  phoneNumber: '07055463452',
  address: ' Lagos, Nigeria'
};

//  incomplete user data
const incompleteUser = {
  email: '',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phoneNumber: '',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  invalid user data
const invalidUserData = {
  email: 'okwuosa',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phoneNumber: 'ayo',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  already existing user data
const alreadyExistingUser = {
  email: 'okwuosachijioke@gmail.com',
  first_name: 'chijioke',
  last_name: 'okwuosa',
  password: '123456',
  confirm_password: '123456',
  phoneNumber: '07055463452',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  incomplete login data
const incompleteLoginData = {
  email: '',
  password: faker.internet.password()
};

//  invalid login data
const invalidLoginData = {
  email: 'okwuosachinedu@gmail.com',
  password: faker.internet.password()
};

//  valid login data
const validLoginData = {
  email: 'okwuosachijioke@gmail.com',
  password: 'jioke1'
};

// Property Test Data
// Valid Token
const validTokenData = userServices.generateToken(1, false);
const inValidTokenData = '5765765iJI.UzzsdfjsdbfkaslkCI6IkpXVxcbcb';

export {
  user,
  incompleteUser,
  invalidUserData,
  alreadyExistingUser,
  incompleteLoginData,
  invalidLoginData,
  validLoginData,
  validTokenData,
  inValidTokenData
};
