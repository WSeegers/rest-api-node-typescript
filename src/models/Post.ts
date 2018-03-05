import BasicModel from './BasicModel';

export default interface Post extends BasicModel {
  readonly userId: string;
  readonly title: string;
  readonly body: string;
  readonly deletedAt: string;
}