const pgPromise = require('pg-promise');

const pg = pgPromise();

const databaseURL = 'postgres://wesleywaterman:@localhost:5432/funstuff';

const db = pg(databaseURL);

module.exports = db;
