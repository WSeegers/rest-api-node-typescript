import BasicModel from './BasicModel';

export default interface ResetPasswordToken extends BasicModel {
  readonly userId: string;
  readonly token: string;
  readonly deletedAt: string;
}