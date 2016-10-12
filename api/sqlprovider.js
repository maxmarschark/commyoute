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
    all: sql('./trans/all.sql'),
    create: sql('./trans/create.sql'),
  },
};

module.exports = sqlProvider;
