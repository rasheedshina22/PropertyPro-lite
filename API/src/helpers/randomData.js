import userServices from '../services/userServices';

//  valid user data
const user = {
  email: 'Emekafor@gmail.com',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
};

//  incomplete user data
const incompleteUser = {
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
};

//  invalid user data
const invalidUserData = {
  email: 'ayo',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
};

//  already existing user data
const alreadyExistingUser = {
  email: 'Emeka.okafor@gmail.com',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
};

//  incomplete login data
const incompleteLoginData = {
  email: 'Emeka.okafor@gmail.com',
  password: ''
};

//  invalid login data
const invalidLoginData = {
  email: 'okwuosachinedu@gmail.com',
  password: '5656'
};

//  valid login data
const validLoginData = {
  email: 'Emeka.okafor@gmail.com',
  password: 'kate'
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
