import faker from 'faker';

const users = [
  {
    email: 'okwuosachijioke@gmail.com',
    first_name: 'chijioke',
    last_name: 'okwuosa',
    password: 'jioke',
    phone_number: '07037381011',
    address: `${faker.address.streetAddress()}, Lagos, Nigeria`
  }
];

export default users;
