import BasicAttributes from './BasicAttributes';

export default interface UserAttributes extends BasicAttributes {
  readonly firstname?: string;
  readonly lastname?: string;
  readonly bio?: string;
  readonly email: string;
  readonly password: string;
}
