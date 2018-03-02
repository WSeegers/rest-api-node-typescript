import { CreateUserSignature, GetUserSignature,  GetUsersSignature, UpdateUserSignature, DeleteUserSignature, AssignUserRoleSignature, RevokeUserRoleSignature } from './modelRepo/users';
import { CreatePostSignature, GetPostSignature, GetPostsSignature, UpdatePostSignature, DeletePostSignature } from './modelRepo/posts';
import { CreateCommentSignature, GetCommentSignature, GetCommentsSignature, UpdateCommentSignature, DeleteCommentSignature } from './modelRepo/comments';
import { CreateRoleSignature, GetRoleSignature, GetRolesSignature, UpdateRoleSignature, DeleteRoleSignature, AssignRolePermissionSignature, RevokeRolePermissionSignature } from './modelRepo/roles';
import { CreatePermissionSignature, GetPermissionSignature, GetPermissionsSignature,
        UpdatePermissionSignature, DeletePermissionSignature } from './modelRepo/permissions';
import { CreateResetPasswordTokenSignature, GetResetPasswordTokensSignature, GetResetPasswordTokenSignature, DeleteResetPasswordTokenSignature } from './modelRepo/resetPasswordTokens';
import SendEmailSignature from './mailRepo/sendEmail/Signature';

export interface ModelRepoInterface {

    readonly createResetPasswordToken: CreateResetPasswordTokenSignature;
    readonly getResetPasswordTokens: GetResetPasswordTokensSignature;
    readonly getResetPasswordToken: GetResetPasswordTokenSignature;
    readonly deleteResetPasswordToken: DeleteResetPasswordTokenSignature;

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
    readonly updatePermission: UpdatePermissionSignature;
    readonly deletePermission: DeletePermissionSignature;
    
    readonly clearRepo: () => Promise<void>;
    readonly migrate: () => Promise<void>;
    readonly rollback: () => Promise<void>;
}

export interface MailRepoInterface {
    readonly sendEmail: SendEmailSignature;
}

export default interface Repo extends ModelRepoInterface, MailRepoInterface {}