import bcrypt from 'bcrypt';

const mySeeder = `
    INSERT INTO users (first_name, last_name, email, password, phone_number, address)
    VALUES ('Emeka', 'Okafor', 'Emeka.okafor@gmail.com', '${bcrypt.hashSync(
      'kate',
      8
    )}', '08043534689', '22 uke street onitsha');

    INSERT INTO users (first_name, last_name, email, password, phone_number, address)
    VALUES ('Gowon', 'nenpan', 'gowon.nenpan@gmail.com', '${bcrypt.hashSync(
      'nenpan',
      8
    )}', '08064789498', '20, Daniel Street, Ogudu, Lagos State');

    INSERT INTO users (first_name, last_name, email, password, phone_number, address, is_admin)
    VALUES ('Chijioke', 'Okwuosa', 'okwuosachijioke@gmail', '${bcrypt.hashSync(
      'jiokeokwuosa',
      8
    )}', '07037381011', '22 Uke street, Lagos State', true);
   

    INSERT INTO status (name)
    VALUES ('available'),
    ('sold'),
    ('rented');

    INSERT INTO purposes (name)
    VALUES ('sale'),
    ('rent');

    INSERT INTO types (name)
    VALUES ('2 bedroom'),
    ('3 bedroom'),
    ('duplex'),
    ('twin duplex'),
    ('commercial property'),
    ('land'),   
    ('others');
   
   
    INSERT INTO states (name)
    VALUES ('Abia'),
  ('Adamawa'),
  ('Anambra'),
  ('Akwa Ibom'),
  ('Bauchi'),
  ('Bayelsa'),
  ('Benue'),
  ('Borno'),
  ('Cross River'),
  ('Delta'),
  ('Ebonyi'),
  ('Enugu'),
  ('Edo'),
  ('Ekiti'),
  ('Abuja'),
  ('Gombe'),
  ('Imo'),
  ('Jigawa'),
  ('Kaduna'),
  ('Kano'),
  ('Katsina'),
  ('Kebbi'),
  ('Kogi'),
  ('Kwara'),
  ('Lagos'),
  ('Nasarawa'),
  ('Niger'),
  ('Ogun'),
  ('Ondo'),
  ('Osun'),
  ('Oyo'),
  ('Plateau'),
  ('Rivers'),
  ('Sokoto'),
  ('Taraba'),
  ('Yobe'),
  ('Zamfara');
  
  INSERT INTO properties (owner, status, price, state, city, address,type,image_url, public_id, description)
    VALUES ('1', '1', '12000', '1', 'Lagos','22 uke street', '1','https://res.cloudinary.com/ppropertypro-lite/image/upload/v1562519617/property/images/gbws7csjxykasla7g3wk.png','gbws7csjxykasla7g3wk','I am a description'),
    ('2', '2', '13000', '2', 'Lagos','22 uke street', '1','https://res.cloudinary.com/ppropertypro-lite/image/upload/v1562519617/property/images/gbws7csjxykasla7g3wk.png','gbws7csjxykasla7g3wk','I am a description2');
`;

export default mySeeder;
