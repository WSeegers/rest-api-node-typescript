import Config from './Config';
import Service from './Service';
import {login, register, forgetPassword, resetPassword} from './auth';
import {createUser, getUser, getUsers, updateUser, deleteUser, assignUserRole, revokeUserRole} from './users';
import {createPost, getPost, getPosts, updatePost, deletePost} from './posts';
import {createComment, getComment, getComments, updateComment, deleteComment} from './comments';
import {createRole, getRole, getRoles, updateRole, deleteRole, revokeRolePermission, assignRolePermission} from './roles';
import {getUserPermissions, createUserPermissions, createPermission, getPermission, getPermissions, updatePermission, deletePermission} from './permissions';
import {migrate, rollback, clearService} from './utils';
import {getResetPasswordTokens, createResetPasswordToken, getResetPasswordToken} from './resetPasswordTokens';

export default (config: Config): Service => {
  return {
    login: login(config),
    register: register(config),
    forgetPassword: forgetPassword(config),
    resetPassword: resetPassword(config),

    createResetPasswordToken: createResetPasswordToken(config),
    getResetPasswordTokens: getResetPasswordTokens(config),
    getResetPasswordToken: getResetPasswordToken(config),
    
    createUser: createUser(config),
    getUser: getUser(config),
    getUsers: getUsers(config),
    updateUser: updateUser(config),
    deleteUser: deleteUser(config),
    assignUserRole: assignUserRole(config),
    revokeUserRole: revokeUserRole(config),

    createPost: createPost(config),
    getPost: getPost(config),
    getPosts: getPosts(config),
    updatePost: updatePost(config),
    deletePost: deletePost(config),
    assignRolePermission: assignRolePermission(config),
    revokeRolePermission: revokeRolePermission(config),

    createComment: createComment(config),
    getComment: getComment(config),
    getComments: getComments(config),
    updateComment: updateComment(config),
    deleteComment: deleteComment(config),

    createRole: createRole(config),
    getRole: getRole(config),
    getRoles: getRoles(config),
    updateRole: updateRole(config),
    deleteRole: deleteRole(config),

    createPermission: createPermission(config),
    getPermission: getPermission(config),
    getPermissions: getPermissions(config),
    updatePermission: updatePermission(config),
    deletePermission: deletePermission(config),
    getUserPermissions: getUserPermissions(config),
    createUserPermissions: createUserPermissions(config),
  
    clearService: clearService(config),
    migrate: migrate(config),
    rollback: rollback(config),
  };
};