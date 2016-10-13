const db = require('../db');
const sql = require('../sqlprovider').trans;
const Train = require('../models/train');

class TransDAO {
  static getTrainInfo(id) {
    return db.one(sql.infoAvgs, [id]).then(avgs =>
      new Train({ name: id, ovrAvg: avgs.overall, smellAvg: avgs.smelly, crowdAvg: avgs.crowded, delayAvg: avgs.delay })
    );
  }
  static all() {
    return db.map(sql.all, [], (row) => new Train(row));
  };
}

module.exports = TransDAO;

// static findUser(keyValue) {
//   const key = Object.keys(keyValue)[0];
//   const value = keyValue[key];
//   return db.one(sql.find, [key, value]).then((row) => new User(row));
// }
// static create({ name, email, password }) {
//   return db.one(sql.create, [name, email, password]).then((row) => new User(row));
// }
// static changeName({ name, uid }) {
//   return db.one(sql.changeName, [name, uid]).then((row) => new User(row));
// }
