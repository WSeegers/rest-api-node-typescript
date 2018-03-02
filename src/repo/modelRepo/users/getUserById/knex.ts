import Signature from './Signature';
import Config from '../../../utils/knex/Config';
import {Options} from './Signature';
import hashPassword from '../../../../utils/hashPassword';
import { USER_MODEL_VISIBLE_PROPERTIES } from '../../../../utils/constants';
import {UserInstance} from '../../../../models/interfaces/user';
import ModelNotFoundError from '../../../../utils/errors/ModelNotFoundError';

export default (config: Config) => {
  return async ({id}: Options) => {
     const user: any = (await config.db).table('users')
                                        .select('*').where('id',id)
                                        .first();
    console.log(user);
    
    // const user: UserInstance | null = await config.models.User.findOne({
    //   attributes: USER_MODEL_VISIBLE_PROPERTIES,
    //   include: [ { model: config.models.Role, as: 'roles' },{ model: config.models.Post, as: 'posts' }  ],
    //   where: { id : options.id }  
    // });
    if(user === null || user === undefined) throw new ModelNotFoundError('User');

    return user;
  }; 
}