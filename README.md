# PropertyPro-lite

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

[![Website jiokeokwuosa.github.io/PropertyPro-lite/UI](https://img.shields.io/website-up-down-green-red/https/jiokeokwuosa.github.io/PropertyPro-lite/UI.svg)](https://jiokeokwuosa.github.io/PropertyPro-lite/UI/)
[![Build Status](https://travis-ci.org/jiokeokwuosa/PropertyPro-lite.svg?branch=develop)](https://travis-ci.org/jiokeokwuosa/PropertyPro-lite)
[![Maintainability](https://api.codeclimate.com/v1/badges/1ddfdf8386b8ed46765f/maintainability)](https://codeclimate.com/github/jiokeokwuosa/PropertyPro-lite/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1ddfdf8386b8ed46765f/test_coverage)](https://codeclimate.com/github/jiokeokwuosa/PropertyPro-lite/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/jiokeokwuosa/PropertyPro-lite/badge.svg)](https://coveralls.io/github/jiokeokwuosa/PropertyPro-lite)

## Required Features

- Users can sign up
- Users can Sign in
- User (agent) can post a property advert.
- User (agent) can update the details of a property advert.
- User (agent) can mark his/her posted advert as sold.
- User (agent) can delete an advert.
- User can view all properties.
- User can view all properties of a specific type - 2 bedroom, 3 bedroom,
mini flat etc.
- User can view a specific property.

## Technologies

- Node JS
- Express
- Mocha & Chai
- ESLint
- Babel
- Travis CI
- Code Climate & Coveralls

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git

To run:
```
$ git clone https://github.com/jiokeokwuosa/PropertyPro-lite.git
$ cd PropertyPro-lite
$ npm install
$ npm start
```

## Testing
```
$ npm test
```

## Pivotal Tracker stories

[https://www.pivotaltracker.com/n/projects/2354349](https://www.pivotaltracker.com/n/projects/2354349)

## Template UI

You can see a hosted version of the template at [https://jiokeokwuosa.github.io/PropertyPro-lite/UI/](https://jiokeokwuosa.github.io/PropertyPro-lite/UI/)

## API

The API is currently in version 1 (v1) and is hosted at [https://propertypro-lite-e.herokuapp.com/api/v1](https://propertypro-lite-e.herokuapp.com/api/v1)

## API Documentation Link

The API documentation is at [https://propertypro-lite-e.herokuapp.com/api/v1/api-docs/](https://propertypro-lite-e.herokuapp.com/api/v1/api-docs/)

## API Endpoints

| Endpoint                                         | Functionality                            |
| ------------------------------------------------ | -----------------------------------------|
| POST /auth/signup                                | Create user account                      |
| POST /auth/signin                                | Login a user                             |
| POST /property                                   | Create a property ad.                    |
| PATCH /property/<:property-id>                   | Update property data.                    |
| PATCH /property/<:property-id>/sold              | Mark a property as sold so users know it’s no longer available .|
| DELETE /property/<:property-id>                  | Delete a property advert.                |
| GET /property/                                   | Get all property adverts                 |
| GET /property/type= propertyType                 | Get all property advertisement offering a specific type of property. |
| GET /property/<:property-id>                     |  View a specific property advert.        |

## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)
