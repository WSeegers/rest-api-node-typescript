import Config from '../../../utils/knex/Config';

export default (config: Config) =>
  async (): Promise<void> => {
    await Promise.resolve(config.db.migrate.latest());
  };