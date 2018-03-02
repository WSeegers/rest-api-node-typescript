import BasicAttributes from './BasicAttributes';

export default interface ResetPasswordTokenAttributes extends BasicAttributes {
  readonly userId: string;
  readonly token: string;
}