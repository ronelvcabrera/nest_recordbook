## Description
A basic REST API for record keeping.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Application flow
> At initial Start as Nestjs does, it creates table.
> To jump start the application, the data given at `src/data/data.json` will be imported to the database.
> Separated `controller`, `models` and `services` for better distinction and encapsulation.
> `controller` will handle the routing
> `services` will handle business logic
> `models` will handle interaces and Entities for TypeOrm
> API available is `pet-owner` with GET method.
> filters can be added under query parameters on the request. 
