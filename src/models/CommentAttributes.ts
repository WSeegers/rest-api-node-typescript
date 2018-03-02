import BasicAttributes from './BasicAttributes';

export default interface CommentAttributes extends BasicAttributes {
  readonly postId: string;
  readonly body: string; 
}