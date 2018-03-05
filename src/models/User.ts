import BasicModel from './BasicModel';

export default interface User extends BasicModel {
  readonly firstname?: string;
  readonly lastname?: string;
  readonly bio?: string;
  readonly email: string;
  readonly password: string;
  readonly deletedAt: string;
}