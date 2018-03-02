import createComment from './createComment/knex';
import getComment from './getComment/knex';
import getComments from './getComments/knex';
import updateComment from './updateComment/knex';
import deleteComment from './deleteComment/knex';

export {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment
}