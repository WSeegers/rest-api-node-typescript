import Signature from './Signature';
import Config from '../../../utils/knex/Config';
import {Options} from './Signature';
import hashPassword from '../../../../utils/hashPassword';
import {UserInstance} from '../../../../models/interfaces/user';
import {UniqueConstraintError} from 'sequelize';
import {UserAlreadyExistsError} from '../../../../utils/errors';
export default (config: Config) => {
  return async (options: Options) => {
    
    const conflictErrorCode = 19;  
    try {
      const [id] = await (await config.db).insert({
        firstname: options.firstname,
        lastname: options.lastname,
        bio: options.bio,
        email: options.email, 
        password: await hashPassword(options.password)
      })
      .into('users')
      .returning('id');
    
      return (await config.db).table('users').select('*').where('id',id).first();
    } catch (err) {
      if (err.errno === conflictErrorCode) {
        throw new UserAlreadyExistsError();
      }
       /* istanbul ignore next */
      throw err;
    }
  }; 
}