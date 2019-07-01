"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _app = _interopRequireDefault(require("../app"));

var _users = _interopRequireDefault(require("../data/data-structure/users"));

var _randomData = require("../helpers/randomData");

// Unit Test for Authentication Route
describe('Auth Route Endpoints', function () {
  describe('POST api/v1/auth/signup', function () {
    it('should successfully register a user if all required inputs are provided', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_randomData.user).set('Accept', 'application/json').expect('Content-Type', /json/).expect(201).expect(function (res) {
        var _res$body = res.body,
            status = _res$body.status,
            data = _res$body.data;
        (0, _chai.expect)(status).to.equal('Success');
        (0, _chai.expect)(data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
      }).end(done);
    });
    it('should not register a user if any or all of the required fields is/are not provided', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_randomData.incompleteUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(400).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('400 Invalid Request');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error');
      }).end(done);
    });
    it('should not register a user if any of the input paramters is/are invalid', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_randomData.invalidUserData).set('Accept', 'application/json').expect('Content-Type', /json/).expect(400).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('400 Invalid Request');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error');
      }).end(done);
    });
    it('should not register a user if he/she supplies an already existing email address', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_randomData.alreadyExistingUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(409).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('409 Conflict');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error');
      }).end(done);
    });
  }); //    tests for login

  describe('POST api/v1/auth/signin', function () {
    it('should successfully login a user if all required inputs are provided', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_users["default"]).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).expect(function (res) {
        var _res$body2 = res.body,
            status = _res$body2.status,
            data = _res$body2.data;
        (0, _chai.expect)(status).to.equal('Success');
        (0, _chai.expect)(data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
      }).end(done);
    });
    it('should not login a user if any or all of the required fields is/are not provided', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signin').send(_randomData.incompleteLoginData).set('Accept', 'application/json').expect('Content-Type', /json/).expect(401).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('401 Unauthorized');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error');
      }).end(done);
    });
    it('should not login a user if any of the input paramters is/are invalid', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/auth/signup').send(_randomData.invalidUserData).set('Accept', 'application/json').expect('Content-Type', /json/).expect(401).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('401 Unauthorized');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error');
      }).end(done);
    });
  });
});