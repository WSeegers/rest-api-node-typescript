
import { LoginSignature, RegisterSignature, ForgetPasswordSignature, ResetPasswordSignature } from './auth';
import { CreateUserSignature, GetUserSignature, GetUsersSignature, UpdateUserSignature, DeleteUserSignature, AssignUserRoleSignature, RevokeUserRoleSignature } from './users';
import { CreatePostSignature, GetPostSignature, GetPostsSignature, UpdatePostSignature, DeletePostSignature  } from './posts';
import { CreateCommentSignature, GetCommentSignature, GetCommentsSignature, UpdateCommentSignature, DeleteCommentSignature  } from './comments';
import { CreateRoleSignature, GetRoleSignature, GetRolesSignature, UpdateRoleSignature, DeleteRoleSignature, RevokeRolePermissionSignature, AssignRolePermissionSignature  } from './roles';
import { CreatePermissionSignature, CreateUserPermissionsSignature, GetPermissionSignature, GetPermissionsSignature, GetUserPermissionsSignature, UpdatePermissionSignature, DeletePermissionSignature  } from './permissions';
import { GetResetPasswordTokensSignature, CreateResetPasswordTokenSignature, GetResetPasswordTokenSignature } from './resetPasswordTokens';
import CommonServiceSignature from './utils/CommonServiceSignature';

export default interface Service {

  readonly login: LoginSignature;
  readonly register: RegisterSignature;
  readonly forgetPassword: ForgetPasswordSignature;
  readonly resetPassword: ResetPasswordSignature;

  readonly createResetPasswordToken: CreateResetPasswordTokenSignature;
  readonly getResetPasswordToken: GetResetPasswordTokenSignature;
  readonly getResetPasswordTokens: GetResetPasswordTokensSignature;

  readonly createUser: CreateUserSignature;
  readonly getUser: GetUserSignature;
  readonly getUsers: GetUsersSignature;
  readonly updateUser: UpdateUserSignature;
  readonly deleteUser: DeleteUserSignature;
  readonly assignUserRole: AssignUserRoleSignature;
  readonly revokeUserRole: RevokeUserRoleSignature;

  readonly createPost: CreatePostSignature;
  readonly getPost: GetPostSignature;
  readonly getPosts: GetPostsSignature;
  readonly updatePost: UpdatePostSignature;
  readonly deletePost: DeletePostSignature;

  readonly createComment: CreateCommentSignature;
  readonly getComment: GetCommentSignature;
  readonly getComments: GetCommentsSignature;
  readonly updateComment: UpdateCommentSignature;
  readonly deleteComment: DeleteCommentSignature;

  readonly createRole: CreateRoleSignature;
  readonly getRole: GetRoleSignature;
  readonly getRoles: GetRolesSignature;
  readonly updateRole: UpdateRoleSignature;
  readonly deleteRole: DeleteRoleSignature;
  readonly assignRolePermission: AssignRolePermissionSignature;
  readonly revokeRolePermission: RevokeRolePermissionSignature;

  readonly createPermission: CreatePermissionSignature;
  readonly getPermission: GetPermissionSignature;
  readonly getPermissions: GetPermissionsSignature;
  readonly getUserPermissions: GetUserPermissionsSignature;
  readonly createUserPermissions: CreateUserPermissionsSignature;
  readonly updatePermission: UpdatePermissionSignature;
  readonly deletePermission: DeletePermissionSignature;

  readonly clearService: CommonServiceSignature;
  readonly migrate: CommonServiceSignature;
  readonly rollback: CommonServiceSignature;
}