import Signature from './Signature';
import Config from '../../../utils/knex/Config';
import {Options} from './Signature';
import hashPassword from '../../../../utils/hashPassword';
import {RoleInstance} from '../../../../models/interfaces/role';
import {UniqueConstraintError} from 'sequelize';
import {ModelAlreadyExistsError} from '../../../../utils/errors';
export default (config: Config) => {
  return async (options: Options) => {
    try{
      const role: RoleInstance = await config.models.Role.create({
        name: options.name,
        description: options.description
      });
      return role.get({ plain: true });
    }catch(err){
      if(err instanceof UniqueConstraintError){
        throw new ModelAlreadyExistsError('Role');
      }
      throw err;
    }
  }; 
}