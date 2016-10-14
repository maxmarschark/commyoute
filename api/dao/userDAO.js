const db = require('../db');
const sql = require('../sqlprovider').users;
const User = require('../models/user');

class UserDAO {
  static findUser(keyValue) {
    console.log(keyValue);
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value]).then((row) => new User(row));
  }
  static create({ name, email, password }) {
    return db.one(sql.create, [name, email, password]).then((row) => new User(row));
  }
  static changeName({ name, uid }) {
    return db.one(sql.changeName, [name, uid]).then((row) => new User(row));
  }
}

module.exports = UserDAO;
