const db = require('../db');
const sql = require('../sqlprovider').trans;
const Train = require('../models/trainModel');

class TransDAO {
  static getTrainInfo(id) {
    return db.one(sql.infoAvgs, [id]).then(avgs =>
      new Train({ name: id, ovrAvg: avgs.overall, smellAvg: avgs.smelly, crowdAvg: avgs.crowded, delayAvg: avgs.delay })
    );
  }
}

module.exports = TransDAO;
