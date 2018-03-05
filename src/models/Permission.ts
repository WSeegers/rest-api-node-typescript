import BasicModel from './BasicModel';

export default interface Permission extends BasicModel {
  readonly name: string;
  readonly label: string;
  readonly description: string; 
  readonly deletedAt: string;
}