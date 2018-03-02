
import Config from '../../Config';
import Signature from './Signature';
import {Options} from './Signature';

export default (config: Config): Signature =>
  async ({userId, roleId}: Options) => {
    return config.repo.assignUserRole({
      userId,
      roleId
    });
  };