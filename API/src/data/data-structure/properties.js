import faker from 'faker';

const properties = [
  {
    id: 1,
    owner: 1,
    price: 900000.0,
    state: 'Anambra',
    city: 'Onitsha',
    address: '20, Uke Street',
    type: '3 bedroom',
    purpose: 'Rent',
    status: 'Available',
    image_url: faker.image.imageUrl(),
    created_on: new Date().toLocaleString()
  },
  {
    id: 2,
    owner: 2,
    price: 600000.0,
    state: 'Imo',
    city: 'Ekuru',
    address: '20, Donga Street',
    type: '2 bedroom',
    purpose: 'For Rent',
    status: 'Available',
    image_url: faker.image.imageUrl(),
    created_on: new Date().toLocaleString()
  }
];
export default properties;
