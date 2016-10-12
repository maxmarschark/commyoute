const db = require('../db');
const sql = require('../sqlprovider').users;

class UserDAO {
  static all() {
    return db.map(sql.all, [], (row) => new User(row));
  }
  static findUser(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value]).then((row) => new User(row));
  }
  static create({firstname, lastname, email, password}) {
    return db.one(sql.create, [firstname, lastname, email, password]).then((row) => new User(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}
module.exports = UserDAO;
