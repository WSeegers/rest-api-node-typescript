import * as knex from 'knex';

export default (db: knex, query: knex.SchemaBuilder): knex.SchemaBuilder => {
  if(db.client.config.client === 'mysql'){
    return query.raw('SET FOREIGN_KEY_CHECKS = 1;');
  }else if(db.client.config.client === 'sqlite3'){
    return query.raw('PRAGMA foreign_keys = ON;');
  }
  throw new Error(`Unsupported client ${db.client.config.client}`);
}