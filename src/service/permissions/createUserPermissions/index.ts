
import Config from '../../Config';
import Signature, {Options} from './Signature';
import ModelNotFoundError from '../../../utils/errors/ModelNotFoundError';
import {DEFAULT_USER_ROLE, DEFAULT_USER_PERMISSIONS} from '../../../utils/constants';
import { PermissionAttributes} from '../../../models/interfaces/permission';
import { RoleAttributes} from '../../../models/interfaces/role';

export default (config: Config): Signature =>
  async (options: Options) => {

     const {role, permissions, userId}: any = { 
       role: DEFAULT_USER_ROLE, permissions: DEFAULT_USER_PERMISSIONS, ...options
      };

     const foundUser: any =  config.repo.getUserById({id: userId});

     if(foundUser === null || foundUser === undefined) throw new ModelNotFoundError('User');
   
     let roleToBeAssigned: any =  config.repo.getRoleById({id: role.id});

     if(roleToBeAssigned === null || roleToBeAssigned === undefined) roleToBeAssigned = await config.repo.createRole(role);

     await config.repo.assignUserRole({userId: foundUser.id, roleId: roleToBeAssigned.id });
     
      const createdPermissions: any[] = await Promise.all(
         permissions.map(async (permission: PermissionAttributes) => {
           return new Promise(async(resolve, reject) => {
             try{
               let foundPermission: any = await config.repo.getPermissionByName({name: permission.name});
               if(foundPermission === null){
                 foundPermission = await config.repo.createPermission(permission);
               }
               resolve(foundPermission);
             }catch(e){
               reject(e);
             }
           });
         }) 
       );
   
       await userRole.setPermissions(createdPermissions);

    return config.repo.createUserPermissions({
      userId: options.userId,
      role: options.role,
      permissions: options.permissions
    });
  };