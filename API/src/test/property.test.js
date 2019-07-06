import { expect } from 'chai';
import path from 'path';
import request from 'supertest';
import app from '../app';
import { validTokenData, inValidTokenData } from '../helpers/randomData';

describe('Property Route Endpoints', () => {
  describe('POST api/v1/property', () => {
    it('should allow an authenticated user(Agent) to successfully post a property advert if he/she provides all the required data', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 40000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'For Rent')
        .attach(
          'image',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('authorization', validTokenData)
        .set('Connection', 'keep-alive')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(res => {
          const { status, data } = res.body;
          expect(status).to.equal('Success');
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
    it('should prevent an unauthenticated user from posting a property', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 30000.0)
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '22, Uke Street')
        .field('type', '2 bedroom')
        .field('purpose', 'For Rent')
        .attach(
          'image',
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
        .field('price', 80000.0)
        .field('state', 'Lagos')
        .field('city', 'Ikeja')
        .field('address', '30, Caleb Road')
        .field('type', '2 bedroom')
        .field('purpose', 'For Rent')
        .attach(
          'image',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('x-access-token', inValidTokenData)
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status, error } = res.body;
          expect(status).to.equal('401 unauthorized');
          expect(error).to.equal('Access token is Invalid');
        })
        .end(done);
    });
    it('should prevent a user from posting a property advert if he/she provides invalid input parameters', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', 'rhjfioo')
        .field('state', 'Anambra')
        .field('city', 12344)
        .field('address', '30, Caleb Road')
        .field('type', '2 bedroom')
        .field('purpose', 'For Rent')
        .attach(
          'image',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('x-access-token', validTokenData)
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Bad Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
    it('should prevent a user from posting an advert if any/all the required input parameters is/are not provided or is/are provided as empty fields', done => {
      request(app)
        .post('/api/v1/property')
        .field('status', 'Available')
        .field('price', '')
        .field('state', 'Anambra')
        .field('city', 'Onitsha')
        .field('address', '')
        .field('type', '3 bedroom')
        .field('purpose', 'For Rent')
        .attach(
          'image',
          path.resolve(__dirname, '../../../UI/assets/img/property.png')
        )
        .set('Connection', 'keep-alive')
        .set('x-access-token', validTokenData)
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Bad Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
  });
});
