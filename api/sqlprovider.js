const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const absolutePath = path.join(__dirname, file);
  return new QueryFile(absolutePath, { minify: true });
}

const sqlProvider = {
  users {
    all: sql('./user/all.sql'),
    create: sql('./user/create.sql'),
    delete: sql('./user/delete.sql'),
    findUser: sql('./user/find.sql')
  }

  trans {
    all: sql('./trans/all.sql'),
    create: sql('./trans/create.sql')
  }
};

module.export = sqlProvider;
