module.exports = {
  development: {
    username: 'sa',
    password: '123',
    database: 'boilerplate_development',
    host: '127.0.0.1',
    dialect: 'mssql'
  },
  test: {
    username: 'sa',
    password: '123',
    database: 'boilerplate_test',
    host: '127.0.0.1',
    dialect: 'mssql',
    logging: null
  },
  production: process.env.DATABASE_URL
};
