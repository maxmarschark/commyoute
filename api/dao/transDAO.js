const db = require('../db');
const sql = require('../sqlprovider').trans;
const Train = require('../models/trainModel');

class TransDAO {
  static getTrainInfo(trainName) {
    let ovrAvg = 0;
    let smellAvg = 0;
    let crowdAvg = 0;
    let delayAvg = 0;
    db.one(sql.crowdedAvg, [trainName]).then((avg) => {
      crowdAvg = avg;
    });
    db.one(sql.delayAvg, [trainName]).then((avg) => {
      delayAvg = avg;
    });
    db.one(sql.smellAvg, [trainName]).then((avg) => {
      smellAvg = avg;
    });
    db.one(sql.overallAvg, [trainName]).then((avg) => {
      ovrAvg = avg;
    }).then(() => {
      return new Train({ name: trainName, ovrAvg, smellAvg, crowdAvg, delayAvg });
    });
  }
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
}

module.exports = TransDAO;
