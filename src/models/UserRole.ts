import BasicModel from './BasicModel';

export default interface UserRole extends BasicModel {
  readonly userId: string;
  readonly roleId: string;
}