import faker from 'faker';
import bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    email: 'okwuosachijioke@gmail.com',
    first_name: 'chijioke',
    last_name: 'okwuosa',
    password: bcrypt.hashSync('jioke1', 8),
    phoneNumber: '07037381011',
    address: `${faker.address.streetAddress()}, Lagos, Nigeria`,
    is_admin: true
  }
];

export default users;
