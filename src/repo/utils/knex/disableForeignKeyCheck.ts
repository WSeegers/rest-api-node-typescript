
import * as knex from 'knex';

export default (db: knex): knex.SchemaBuilder => {
  if(db.client.config.client === 'mysql'){
    return db.schema.raw('SET FOREIGN_KEY_CHECKS = 0;');
  }else if(db.client.config.client === 'sqlite3'){
    return db.schema.raw('PRAGMA foreign_keys = OFF;');
  }
  throw new Error(`Unsupported client ${db.client.config.client}`);
}