import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

import {
  user,
  incompleteUser,
  invalidUserData,
  alreadyExistingUser,
  incompleteLoginData,
  validLoginData,
  invalidLoginData
} from '../helpers/randomData';

// Unit Test for Authentication Route
describe('Auth Route Endpoints', () => {
  describe('POST api/v1/auth/signup', () => {
    it('should successfully register a user if all required inputs are provided', done => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(res => {
          const { status, data } = res.body;
          expect(status).to.equal('success');
          expect(data).to.have.all.keys(
            'token',
            'id',
            'first_name',
            'last_name',
            'email',
            'description'
          );
        })
        .end(done);
    });
    it('should not register a user if any or all of the required fields is/are not provided', done => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(incompleteUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Invalid Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
    it('should not register a user if any of the input paramters is/are invalid', done => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(invalidUserData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('400 Invalid Request');
          expect(res.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });
    it('should not register a user if he/she supplies an already existing email address', done => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(alreadyExistingUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(409)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('409 Conflict');
          expect(res.body).to.have.all.keys('status', 'error');
        })
        .end(done);
    });
  });

  //    tests for login
  describe('POST api/v1/auth/signin', () => {
    it('should successfully login a user if all required inputs are provided', done => {
      request(app)
        .post('/api/v1/auth/signin')
        .send(validLoginData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(res => {
          const { status, data } = res.body;
          expect(status).to.equal('success');
          expect(data).to.have.all.keys(
            'token',
            'id',
            'first_name',
            'last_name',
            'email'
          );
        })
        .end(done);
    });
    it('should not login a user if any or all of the required fields is/are not provided', done => {
      request(app)
        .post('/api/v1/auth/signin')
        .send(incompleteLoginData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('401 Unauthorized');
          expect(res.body).to.have.all.keys('status', 'error');
        })
        .end(done);
    });
    it('should not login a user if any of the input paramters is/are invalid', done => {
      request(app)
        .post('/api/v1/auth/signin')
        .send(invalidLoginData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          const { status } = res.body;
          expect(status).to.equal('401 Unauthorized');
          expect(res.body).to.have.all.keys('status', 'error');
        })
        .end(done);
    });
  });
});
