import Config from './Config';
import Repo from './Repo';
import sequelizeRepo from './utils/sequelize/facade';
import knexRepo from './utils/knex/facade';
import nodemailerRepo from './utils/nodemailer/facade';
import {models, sequelize} from '../models'; 
import {ModelRepoInterface, MailRepoInterface} from './Repo';
import db from '../knex/db';
import config from '../config';
import {TABLE_NAMES} from '../utils/constants';
const modelRepoFactory = (name: string): ModelRepoInterface => {
  switch (name) {
    default:
    case 'knex':
      return knexRepo({
        db,
        tableNames: TABLE_NAMES,
        migrationTableName: config.knexCommon.migrations.tableName
      });
    // default: case 'sequelize':
    //   return sequelizeRepo({
    //     sequelizeInstance: sequelize,
    //     models: models
    //   });
  }
}

const mailRepoFactory = (name: string):MailRepoInterface => {
  switch (name) {
    default: case 'nodemailer':
      return nodemailerRepo({});
  }
}

export default (config: Config): Repo => {
  /* istanbul ignore next */
  return {
    ...modelRepoFactory(config.modelRepoName),
    ...mailRepoFactory(config.mailRepoName)
  }
};