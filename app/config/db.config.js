module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "26012016",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };