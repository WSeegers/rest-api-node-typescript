import * as knex from 'knex';

export default interface Config {
  readonly db: knex;
  readonly migrationTableName: string;
  readonly tableNames: string[];
}
