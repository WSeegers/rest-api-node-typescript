import Config from './Config';
import { ModelRepoInterface } from '../../Repo';
import migrate from '../../modelRepo/commons/migrate/knex';
import rollback from '../../modelRepo/commons/rollback/knex';
import clearRepo from '../../modelRepo/commons/clearRepo/knex';
import { createUser, updateUser, deleteUser, getUser, getUsers, assignUserRole, revokeUserRole } from '../../modelRepo/users/knex';
import { createResetPasswordToken, getResetPasswordToken, getResetPasswordTokens, deleteResetPasswordToken } from '../../modelRepo/resetPasswordTokens/knex';
import { createRole, getRole, getRoles, deleteRole, updateRole, assignRolePermission, revokeRolePermission } from '../../modelRepo/roles/knex';
import { createPermission, getPermissions, updatePermission, deletePermission, getPermission  } from '../../modelRepo/permissions/knex';
import { createPost, getPost, getPosts, deletePost, updatePost } from '../../modelRepo/posts/knex';
import { createComment, getComment, getComments, deleteComment, updateComment } from '../../modelRepo/comments/knex';

export default (config: Config): ModelRepoInterface => {
  return {
    getResetPasswordToken: getResetPasswordToken(config),
    getResetPasswordTokens: getResetPasswordTokens(config),
    deleteResetPasswordToken: deleteResetPasswordToken(config),
    createResetPasswordToken: createResetPasswordToken(config),

    createUser: createUser(config),
    getUser: getUser(config),
    deleteUser: deleteUser(config),
    getUsers: getUsers(config),
    updateUser: updateUser(config),
    assignUserRole: assignUserRole(config),
    revokeUserRole: revokeUserRole(config),

    getPost: getPost(config),
    createPost: createPost(config),
    getPosts: getPosts(config),
    updatePost: updatePost(config),
    deletePost: deletePost(config),

    createComment: createComment(config),
    getComment: getComment(config),
    getComments: getComments(config),
    updateComment: updateComment(config),
    deleteComment: deleteComment(config),

    createRole: createRole(config),
    updateRole: updateRole(config),
    getRoles: getRoles(config),
    deleteRole: deleteRole(config),
    getRole: getRole(config),
    assignRolePermission: assignRolePermission(config),
    revokeRolePermission: revokeRolePermission(config),

    createPermission: createPermission(config),
    getPermission: getPermission(config),
    getPermissions: getPermissions(config),
    updatePermission: updatePermission(config),
    deletePermission: deletePermission(config),

    clearRepo: clearRepo(config),
    migrate: migrate(config),
    rollback: rollback(config)
  };
};