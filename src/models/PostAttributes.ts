import BasicAttributes from './BasicAttributes';

export default interface PostAttributes extends BasicAttributes {
  readonly userId: string;
  readonly title: string;
  readonly body: string;
}