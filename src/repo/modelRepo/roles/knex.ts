import createRole from './createRole/knex';
import deleteRole from './deleteRole/knex';
import getRole from './getRole/knex';
import getRoles from './getRoles/knex';
import updateRole from './updateRole/knex';
import revokeRolePermission from './revokeRolePermission/knex';
import assignRolePermission from './assignRolePermission/knex';

export {
  createRole,
  deleteRole,
  getRole,
  getRoles,
  updateRole,
  assignRolePermission,
  revokeRolePermission
}