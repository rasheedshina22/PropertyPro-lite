import faker from 'faker';
import bcrypt from 'bcrypt';

const users = [
  {
    email: 'okwuosachijioke@gmail.com',
    first_name: 'chijioke',
    last_name: 'okwuosa',
    password: bcrypt.hashSync('jioke', 8),
    phone_number: '07037381011',
    address: `${faker.address.streetAddress()}, Lagos, Nigeria`
  }
];

export default users;
