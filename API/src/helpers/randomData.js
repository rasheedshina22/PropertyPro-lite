import faker from 'faker';

//  valid user data
const user = {
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phone_number: '07055463452',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  incomplete user data
const incompleteUser = {
  email: '',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phone_number: '',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  invalid user data
const invalidUserData = {
  email: 'okwuosa',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phone_number: 'ayo',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};

//  already existing user data
const alreadyExistingUser = {
  email: 'okwuosachijioke@gmail.com',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  confirm_password: faker.internet.password(),
  phone_number: '07055463452',
  address: `${faker.address.streetAddress()}, Lagos, Nigeria`
};
export { user, incompleteUser, invalidUserData, alreadyExistingUser };
