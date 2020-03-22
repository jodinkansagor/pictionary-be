require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Card = require('../lib/models/Card');

describe('crud routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a card', () => {
    return request(app)
      .post('/api/v1/card')
      .send({
        cardPhrase: 'dentist',
        category: 'person or place'
      })
      .then(res => {
        console.log(res.body, 'RES.BODY');
        expect(res.body).toEqual({
          _id: expect.any(String),
          cardPhrase: 'dentist',
          category: 'person or place',
          __v: 0
        });
      });
  });
});
