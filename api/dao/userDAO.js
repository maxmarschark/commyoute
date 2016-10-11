const db = require('../db');
const sql = require('../sqlprovider').users;

class UserDAO {
  static all() {
    return db.map(sql.all, [])
  }
}
