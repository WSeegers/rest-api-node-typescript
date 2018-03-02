import Signature from './Signature';
import Config from '../../../utils/knex/Config';
import {Options} from './Signature';
import hashPassword from '../../../../utils/hashPassword';
import {PermissionAttributes, PermissionInstance} from '../../../../models/interfaces/permission';
import {RoleInstance} from '../../../../models/interfaces/role';
import {UserInstance} from '../../../../models/interfaces/user';

import {DEFAULT_USER_ROLE, DEFAULT_USER_PERMISSIONS} from '../../../../utils/constants';
import * as R from 'ramda';

export default (config: Config) => {
  return async ({userId, role = DEFAULT_USER_ROLE, permissions = DEFAULT_USER_PERMISSIONS}: Options) => {
    
    const user: any = (await config.db).table('users').select('*').where('id',userId).first();
 
    if(user === null) throw new ModelNotFoundError();

    // let userRole: any = await config.models.Role.findOne({where: role});
    // if(userRole === null){
    //   userRole = await config.models.Role.create(role);
    // }
    
    // await user.setRoles([userRole]);

    // const createdPermissions: any[] = await Promise.all(
    //   permissions.map(async (permission: PermissionAttributes) => {
    //     return new Promise(async(resolve, reject) => {
    //       try{
    //         let foundPermission: PermissionInstance | null = await config.models.Permission.findOne({where: permission});
    //         if(foundPermission === null){
    //           foundPermission = await config.models.Permission.create(permission);
    //         }
    //         resolve(foundPermission);
    //       }catch(e){
    //         reject(e);
    //       }
    //     });
    //   }) 
    // );

    // await userRole.setPermissions(createdPermissions);
  }; 
}