import Config from '../../../utils/knex/Config';
import disableForeignKeyCheck from '../../../utils/knex/disableForeignKeyCheck';
import enableForeignKeyCheck from '../../../utils/knex/enableForeignKeyCheck';
import truncateTables from '../../../utils/knex/truncateTables';
import {TABLE_NAMES} from '../../../../utils/constants';
export default (config: Config) => {
  return async (): Promise<void> => {
    const start = disableForeignKeyCheck(config.db);
    const truncate = truncateTables({
      start,
      tableNames: TABLE_NAMES,
      db: config.db
    });
    const end = enableForeignKeyCheck(config.db, truncate);
    await Promise.resolve(end);
  };
};