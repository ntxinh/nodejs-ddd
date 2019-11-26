# How to run
- Setup the database on `config/database.js`
- `npm i`
- Run the database migrations with `npm run sequelize db:migrate`
- Add some seed data to the development database with `npm run sequelize db:seed:all`
- Run the application in development mode with `npm run dev`
- Access http://localhost:3000/api/docs

## Scripts

- `dev`: Run the application in development mode
- `start` Run the application in production mode (prefer not to do that in development)
- `lint`: Lint the codebase
- `sequelize`: Alias to the Sequelize CLI
- `console`: Open the built-in console, you can access the DI container through the `container` variable once it's open, the console is promise-friendly.
- `cleanup`: Removes the files from the example application

## Tech

- [Node v10+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Sequelize CLI](https://github.com/sequelize/cli)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Structure](https://www.npmjs.com/package/structure)
- [HTTP Status](https://www.npmjs.com/package/http-status)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Status Monitor](https://www.npmjs.com/package/express-status-monitor)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://www.npmjs.com/package/pm2)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [FactoryGirl](https://www.npmjs.com/package/factory-girl)
- [Istanbul](https://www.npmjs.com/package/istanbul) + [NYC](https://www.npmjs.com/package/nyc)
- [ESLint](https://www.npmjs.com/package/eslint)

# References
- https://github.com/talyssonoc/node-api-boilerplate
