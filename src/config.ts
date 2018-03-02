import {ONE_HOUR} from './utils/constants';
import {getNumberOption, getStringOption, getBooleanOption} from './utils';
import {defaultTo} from 'ramda';

export interface Config {
  lang: string;
  express: any;
  sequelize: any;
  knex: any;
  knexCommon: any;
  winston: any;
  jwt: any;
  mail: any;
  modelRepo: any;
  mailRepo: any;
  mailgun: any;
}

export default {
  lang: getStringOption(process.env.LANG, 'en'),
  express: {
    port: getNumberOption(process.env.EXPRESS_PORT, 3000),
    testPort: getNumberOption(process.env.EXPRESS_TEST_PORT, 3001),
    morganDirectory: getStringOption(
      process.env.EXPRESS_MORGAN_DIRECTORY,
      `${process.cwd()}/logs/access`,
    ),
    morganLogFormat: getStringOption(
      process.env.EXPRESS_MORGAN_LOG_FORMAT,
      ':method :url :remote-addr :referrer :date :status'
    )
  },
  jwt: {
    secret: getStringOption(process.env.JWT_SECRET, 'secret'),
    expiresIn: getNumberOption(process.env.JWT_EXPIRES_IN, ONE_HOUR),
    algoritm: getStringOption(process.env.JWT_ALGORITM, 'HS256'),
  },
  mail: {
    from: getStringOption(process.env.TEST_MAIL_FROM, 'support@test.com'),
    to: getStringOption(process.env.TEST_MAIL_TO, 'support@test.com'),
    port:  getNumberOption(process.env.TEST_MAIL_PORT, 1025)
  },
  knex: {
    development: {
      client: getStringOption(process.env.DEV_DB_user, 'mysql'),
      connection: {
        user: getStringOption(process.env.DEV_DB_user, 'root'),
        password: getStringOption(process.env.DEV_DB_PASSWORD,'password'),
        database: getStringOption(process.env.DEV_DB_NAME,'database_dev'),
        host:  getStringOption(process.env.DEV_DB_HOSTNAME,'localhost'),
      }
    },
    test: {
      client: getStringOption(process.env.DEV_DB_user, 'sqlite3'),
      connection: {
        filename: ":memory:"
      }
    },
    production: {
      client: getStringOption(process.env.DEV_DB_user, 'mysql'),
      connection: {
        user: getStringOption(process.env.PROD_DB_USERNAME,'root'),
        password: getStringOption(process.env.PROD_DB_PASSWORD,'password'),
        database: getStringOption(process.env.PROD_DB_NAME,'database_prod'),
        host: getStringOption(process.env.PROD_DB_HOSTNAME,'localhost'),
      }
    }
  },
  knexCommon: {
    debug: false,
    useNullAsDefault: true,
    migrations: {
      directory: `${process.cwd()}/src/migrations`,
      extension: 'ts',
      tableName: getStringOption(process.env.KNEX_MIGRATIONS_TABLE, 'migrations'),
    }
  },
  sequelize: {
    development: {
      username: getStringOption(process.env.DEV_DB_USERNAME, 'root'),
      password: getStringOption(process.env.DEV_DB_PASSWORD,'password'),
      database: getStringOption(process.env.DEV_DB_NAME,'database_dev'),
      host:  getStringOption(process.env.DEV_DB_HOSTNAME,'localhost'),
      dialect: getStringOption(process.env.DEV_DB_DIALECT,'mysql'),
      operatorsAliases: getBooleanOption(process.env.DEV_DB_OPERATOR_ALIASES, false)
    },
    test: {
      username: getStringOption(process.env.TEST_DB_USERNAME,'root'),
      password: getStringOption(process.env.TEST_DB_PASSWORD,'root'),
      database: getStringOption(process.env.TEST_DB_NAME,'database_test'),
      host: getStringOption(process.env.TEST_DB_HOSTNAME,'localhost'),
      dialect: getStringOption(process.env.TEST_DB_DIALECT,'sqlite'),
      operatorsAliases: getBooleanOption(process.env.TEST_DB_OPERATOR_ALIASES, false)
    },
    production: {
      username: getStringOption(process.env.PROD_DB_USERNAME,'root'),
      password: getStringOption(process.env.PROD_DB_PASSWORD,'password'),
      database: getStringOption(process.env.PROD_DB_NAME,'database_prod'),
      host: getStringOption(process.env.PROD_DB_HOSTNAME,'localhost'),
      dialect: getStringOption(process.env.PROD_DB_DIALECT,'sqlite'),
      operatorsAliases: getBooleanOption(process.env.PROD_DB_OPERATOR_ALIASES, false)
    }
  },
  modelRepo: {
    name: getStringOption(defaultTo<any>(
      process.env.MODEL_REPO_NAME
    ), 'knex'),
  },
  mailRepo: {
    name: getStringOption(defaultTo<any>(
      process.env.MODEL_MAIL_REPO
    ), 'nodemailer'),
  },
  winston: {
    level: getStringOption(process.env.WINSTON_LEVEL, 'info'),
    winstonDirectory: getStringOption(
      process.env.WINSTON_DIRECTORY,
      `${process.cwd()}/logs`,
    ),
  }
} as Config;