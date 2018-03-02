import Config from './Config';
import {ModelRepoInterface} from '../../Repo';
import createUser from '../../modelRepo/users/createUser/knex';
import updateUser from '../../modelRepo/users/updateUser/knex';
import deleteUserById from '../../modelRepo/users/deleteUserById/knex';
import getUserById from '../../modelRepo/users/getUserById/knex';
import getUserByEmail from '../../modelRepo/users/getUserByEmail/knex';
import getUserPermissions from '../../modelRepo/permissions/getUserPermissions/knex';
import createUserPermissions from '../../modelRepo/permissions/createUserPermissions/knex';
import getUsers from '../../modelRepo/users/getUsers/knex';
import assignUserRole from  '../../modelRepo/users/assignUserRole/knex';
import revokeUserRole from  '../../modelRepo/users/revokeUserRole/knex';
import migrate from '../../modelRepo/commons/migrate/knex';
import rollback from '../../modelRepo/commons/rollback/knex';
import clearRepo from '../../modelRepo/commons/clearRepo/knex';
import createResetPasswordToken from '../../modelRepo/resetPasswordTokens/createResetPasswordToken/knex';
import getUserResetPasswordTokens from '../../modelRepo/resetPasswordTokens/getUserResetPasswordTokens/knex';
import getResetPasswordTokenByToken from '../../modelRepo/resetPasswordTokens/getResetPasswordTokenByToken/knex';
import deleteResetPasswordTokenById from '../../modelRepo/resetPasswordTokens/deleteResetPasswordTokenById/knex';
import createRole from '../../modelRepo/roles/createRole/knex';
import updateRole from '../../modelRepo/roles/updateRole/knex';
import getRoleById from '../../modelRepo/roles/getRoleById/knex';
import deleteRoleById from '../../modelRepo/roles/deleteRoleById/knex';
import getRoles from '../../modelRepo/roles/getRoles/knex';
import assignRolePermission from '../../modelRepo/roles/assignRolePermission/knex';
import revokeRolePermission from '../../modelRepo/roles/revokeRolePermission/knex';
import createPermission from '../../modelRepo/permissions/createPermission/knex';
import getPermissions from '../../modelRepo/permissions/getPermissions/knex';
import updatePermission from '../../modelRepo/permissions/updatePermission/knex';
import getPermissionById from '../../modelRepo/permissions/getPermissionById/knex';
import deletePermissionById from '../../modelRepo/permissions/deletePermissionById/knex';
import createPost from  '../../modelRepo/posts/createPost/knex';
import getPostById from '../../modelRepo/posts/getPostById/knex';
import getPosts from '../../modelRepo/posts/getPosts/knex';
import updatePost from '../../modelRepo/posts/updatePost/knex';
import deletePostById from '../../modelRepo/posts/deletePostById/knex';
import createComment from '../../modelRepo/comments/createComment/knex';
import getCommentById from '../../modelRepo/comments/getCommentById/knex';
import getComments from '../../modelRepo/comments/getComments/knex';
import updateComment from '../../modelRepo/comments/updateComment/knex';
import deleteCommentById from '../../modelRepo/comments/deleteCommentById/knex';


export default (config: Config): ModelRepoInterface => {
  return {
    getResetPasswordTokenByToken: getResetPasswordTokenByToken(config),
    deleteResetPasswordTokenById: deleteResetPasswordTokenById(config),
    createResetPasswordToken: createResetPasswordToken(config),
    getUserResetPasswordTokens: getUserResetPasswordTokens(config),

    createUser: createUser(config),
    getUserById: getUserById(config),
    deleteUserById: deleteUserById(config),
    getUsers: getUsers(config),
    updateUser: updateUser(config),
    getUserByEmail: getUserByEmail(config),
    assignUserRole: assignUserRole(config),
    revokeUserRole: revokeUserRole(config),

    getPostById: getPostById(config),
    createPost: createPost(config),
    getPosts: getPosts(config),
    updatePost: updatePost(config),
    deletePostById: deletePostById(config),

    createComment: createComment(config),
    getCommentById: getCommentById(config),
    getComments: getComments(config),
    updateComment: updateComment(config),
    deleteCommentById: deleteCommentById(config),

    createRole: createRole(config),
    updateRole: updateRole(config),
    getRoles: getRoles(config),
    deleteRoleById: deleteRoleById(config),
    getRoleById: getRoleById(config),
    assignRolePermission: assignRolePermission(config),
    revokeRolePermission: revokeRolePermission(config),

    createPermission: createPermission(config),
    getPermissionById: getPermissionById(config),
    getPermissions: getPermissions(config),
    createUserPermissions: createUserPermissions(config),
    getUserPermissions: getUserPermissions(config),
    updatePermission: updatePermission(config),
    deletePermissionById: deletePermissionById(config),

    clearRepo: clearRepo(config),
    migrate: migrate(config),
    rollback: rollback(config)
  };
};