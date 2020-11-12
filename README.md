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
1. At initial Start as Nestjs does, it creates table.
2. To jump start the application, the data given at `src/data/data.json` will be imported to the database.
3. Separated `controller`, `models` and `services` for better distinction and encapsulation.
4. `controller` will handle the routing
5. `services` will handle business logic
6. `models` will handle interaces and Entities for TypeOrm
7. API available is `pet-owner` with GET method.
8. filters can be added under query parameters on the request. 
