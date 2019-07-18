import { expect } from 'chai';
import path from 'path';
import request from 'supertest';
import app from '../app';
import { validTokenData, inValidTokenData } from '../helpers/randomData';

describe('Property Route Endpoints', () => {
  describe('POST api/v1/property', () => {
    it('Allows a user to post property when he/she provides all the required valid data', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('token', validTokenData)
        .set('Connection', 'keep-alive')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(res => {
          const { status, data } = res.body;
          expect(status).to.equal('success');
          expect(data).to.have.all.keys(
            'id',
            'status',
            'type',
            'state',
            'city',
            'address',
            'price',
            'created_on',
            'image_url',
            'purpose'
          );
        })
        .end(done);
    });
    it('should prevent a user who has not been authenticated from posting a property', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status, error } = res.body;
          expect(status).to.equal('401 unauthorized');
          expect(error).to.equal('Access token is Required');
        })
        .end(done);
    });
    it('should prevent a user with an Invalid token from posting a property advert', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('token', inValidTokenData)
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status, error } = res.body;
          expect(status).to.equal('401 Unauthorized');
          expect(error).to.equal('Access token is Invalid');
        })
        .end(done);
    });
    it('should prevent a user from posting a property if he/she provides invalid data', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'co,img')
        .field('price', 'chijjokd')
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('token', validTokenData)
        .expect('Content-Type', /json/)
        .expect(400)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Bad Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
    it('should prevent a user from posting an advert if any of the required field is empty', done => {
      request(app)
        .post('/api/v1/property')
        .field('state', 'Anambra')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('token', validTokenData)
        .expect('Content-Type', /json/)
        .expect(400)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Bad Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
  });
  describe('PATCH api/v1/property/:property-id', () => {
    it('Allows a user to update property when he/she provides all the required valid data', done => {
      request(app)
        .patch('/api/v1/property/1')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('token', validTokenData)
        .set('Connection', 'keep-alive')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(res => {
          const { status, data } = res.body;
          expect(status).to.equal('success');
          expect(data).to.have.all.keys(
            'id',
            'status',
            'type',
            'state',
            'city',
            'address',
            'price',
            'created_on',
            'image_url',
            'purpose'
          );
        })
        .end(done);
    });
    it('should prevent a user who has not been authenticated from updating a property', done => {
      request(app)
        .patch('/api/v1/property/1')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status, error } = res.body;
          expect(status).to.equal('401 unauthorized');
          expect(error).to.equal('Access token is Required');
        })
        .end(done);
    });
    it('should prevent a user with an Invalid token from updating a property advert', done => {
      request(app)
        .patch('/api/v1/property/1')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('token', inValidTokenData)
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status, error } = res.body;
          expect(status).to.equal('401 Unauthorized');
          expect(error).to.equal('Access token is Invalid');
        })
        .end(done);
    });
    it('should prevent a user from updating a property if he/she provides invalid data', done => {
      request(app)
        .patch('/api/v1/property/1')
        .field('status', 'co,img')
        .field('price', 'chijjokd')
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'Rent')
        .attach(
          'image_url',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('token', validTokenData)
        .expect('Content-Type', /json/)
        .expect(400)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Bad Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
  });
});
