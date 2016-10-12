const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const absolutePath = path.join(__dirname, file);
  return new QueryFile(absolutePath, { minify: true });
}

const sqlProvider = {
  users: {
    create: sql('./user/create.sql'),
    findUser: sql('./user/find.sql'),
    changeName: sql('./user/change.sql'),
  },
  trans: {
    crowdedAvg: sql('./trans/trainInfo/crowdedAvg.sql'),
    delayAvg: sql('./trans/trainInfo/crowdedAvg.sql'),
    overallAvg: sql('./trans/trainInfo/crowdedAvg.sql'),
    smellAvg: sql('./trans/trainInfo/crowdedAvg.sql'),
    create: sql('./trans/create.sql'),
  },
};

module.exports = sqlProvider;
