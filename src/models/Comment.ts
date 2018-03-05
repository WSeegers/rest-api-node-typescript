import BasicModel from './BasicModel';

export default interface Comment extends BasicModel {
  readonly postId: string;
  readonly body: string; 
  readonly deletedAt: string;
}