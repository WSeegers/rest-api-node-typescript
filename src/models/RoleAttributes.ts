import BasicAttributes from './BasicAttributes';

export default interface RoleAttributes extends BasicAttributes {
  readonly name: string;
  readonly description: string;
}