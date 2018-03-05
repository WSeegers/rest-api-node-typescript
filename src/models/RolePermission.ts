import BasicModel from './BasicModel';

export default interface RolePermission extends BasicModel {
  readonly userId: string;
  readonly permissionId: string;
}