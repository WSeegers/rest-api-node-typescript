import BasicAttributes from './BasicAttributes';

export default interface PermissionAttributes extends BasicAttributes {
  readonly name: string;
  readonly label: string;
  readonly description: string;
}