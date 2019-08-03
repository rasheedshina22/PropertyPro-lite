"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = require("chai");

var _path = _interopRequireDefault(require("path"));

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("../app"));

var _randomData = require("../helpers/randomData");

describe('Property Route Endpoints', function () {
  describe('POST api/v1/property', function () {
    it('Allows a user to post property when he/she provides all the required valid data', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/property').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('token', _randomData.validTokenData).set('Connection', 'keep-alive').expect('Content-Type', /json/).expect(201).expect(function (res) {
        var _res$body = res.body,
            status = _res$body.status,
            data = _res$body.data;
        (0, _chai.expect)(status).to.equal('success');
        (0, _chai.expect)(data).to.have.all.keys('id', 'status', 'type', 'state', 'city', 'address', 'price', 'created_on', 'image_url', 'purpose');
      }).end(done);
    });
    it('should prevent a user who has not been authenticated from posting a property', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/property').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').expect('Content-Type', /json/).expect(401).expect(function (res) {
        var _res$body2 = res.body,
            status = _res$body2.status,
            error = _res$body2.error;
        (0, _chai.expect)(status).to.equal('401 unauthorized');
        (0, _chai.expect)(error).to.equal('Access token is Required');
      }).end(done);
    });
    it('should prevent a user with an Invalid token from posting a property advert', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/property').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').set('token', _randomData.inValidTokenData).expect('Content-Type', /json/).expect(401).expect(function (res) {
        var _res$body3 = res.body,
            status = _res$body3.status,
            error = _res$body3.error;
        (0, _chai.expect)(status).to.equal('401 Unauthorized');
        (0, _chai.expect)(error).to.equal('Access token is Invalid');
      }).end(done);
    });
    it('should prevent a user from posting a property if he/she provides invalid data', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/property').field('status', 'co,img').field('price', 'chijjokd').field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').set('token', _randomData.validTokenData).expect('Content-Type', /json/).expect(400).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('400 Invalid Request');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error', 'errors');
      }).end(done);
    });
    it('should prevent a user from posting an advert if any of the required field is empty', function (done) {
      (0, _supertest["default"])(_app["default"]).post('/api/v1/property').field('state', 'Anambra').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').set('token', _randomData.validTokenData).expect('Content-Type', /json/).expect(400).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('400 Invalid Request');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error', 'errors');
      }).end(done);
    });
  });
  describe('PATCH api/v1/property/:property-id', function () {
    it('Allows a user to update property when he/she provides all the required valid data', function (done) {
      (0, _supertest["default"])(_app["default"]).patch('/api/v1/property/1').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('token', _randomData.validTokenData).set('Connection', 'keep-alive').expect('Content-Type', /json/).expect(200).expect(function (res) {
        var _res$body4 = res.body,
            status = _res$body4.status,
            data = _res$body4.data;
        (0, _chai.expect)(status).to.equal('success');
        (0, _chai.expect)(data).to.have.all.keys('id', 'status', 'type', 'state', 'city', 'address', 'price', 'created_on', 'image_url', 'purpose');
      }).end(done);
    });
    it('should prevent a user who has not been authenticated from updating a property', function (done) {
      (0, _supertest["default"])(_app["default"]).patch('/api/v1/property/1').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').expect('Content-Type', /json/).expect(401).expect(function (res) {
        var _res$body5 = res.body,
            status = _res$body5.status,
            error = _res$body5.error;
        (0, _chai.expect)(status).to.equal('401 unauthorized');
        (0, _chai.expect)(error).to.equal('Access token is Required');
      }).end(done);
    });
    it('should prevent a user with an Invalid token from updating a property advert', function (done) {
      (0, _supertest["default"])(_app["default"]).patch('/api/v1/property/1').field('status', 'Available').field('price', 40000.0).field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').set('token', _randomData.inValidTokenData).expect('Content-Type', /json/).expect(401).expect(function (res) {
        var _res$body6 = res.body,
            status = _res$body6.status,
            error = _res$body6.error;
        (0, _chai.expect)(status).to.equal('401 Unauthorized');
        (0, _chai.expect)(error).to.equal('Access token is Invalid');
      }).end(done);
    });
    it('should prevent a user from updating a property if he/she provides invalid data', function (done) {
      (0, _supertest["default"])(_app["default"]).patch('/api/v1/property/1').field('status', 'co,img').field('price', 'chijjokd').field('state', 'Anambra').field('city', 'Onitsha').field('address', '22, Uke Street').field('type', '2 bedroom').field('purpose', 'Rent').attach('image_url', _path["default"].resolve(__dirname, '../../../UI/assets/img/property.png')).set('Connection', 'keep-alive').set('token', _randomData.validTokenData).expect('Content-Type', /json/).expect(400).expect(function (res) {
        var status = res.body.status;
        (0, _chai.expect)(status).to.equal('400 Invalid Request');
        (0, _chai.expect)(res.body).to.have.all.keys('status', 'error', 'errors');
      }).end(done);
    });
  });
});