import * as knex from 'knex';

export interface TruncateOptions {
  readonly db: knex;
  readonly start: knex.SchemaBuilder;
  readonly tableNames: string[];
}

export default (options: TruncateOptions) => {
  return options.tableNames.reduce((result, tableName) => {
    if(options.db.client.config.client === 'sqlite3'){
      return result.raw(`DELETE FROM ${tableName}; VACUUM;`);
    }else if(options.db.client.config.client === 'mysql'){
      return result.raw(`TRUNCATE ${tableName};`);
    }
    throw new Error(`Invalid db client ${options.db.client.config.client}`);
  }, options.start);
}