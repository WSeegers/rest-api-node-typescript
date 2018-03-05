import BasicModel from './BasicModel';

export default interface Role extends BasicModel {
  readonly name: string;
  readonly description: string;
  readonly deletedAt: string;
}