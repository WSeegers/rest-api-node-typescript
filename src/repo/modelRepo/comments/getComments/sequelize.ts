import Signature from './Signature';
import Config from '../../../utils/sequelize/Config';
import {Options} from './Signature';
import {PostInstance} from '../../../../models/interfaces/post';
import ModelNotFoundError from '../../../../utils/errors/ModelNotFoundError';
import paginate from '../../../../presenter/express/utils/paginate';
import createOrderObject from '../../../../utils/createOrderObject';
import {API_ROUTE_V1,COMMENT_MODEL_VISIBLE_PROPERTIES, DEFAULT_COMMENTS_PAGINATION_LIMIT,DEFAULT_COMMENTS_PAGINATION_OFFSET,DEFAULT_COMMENTS_ORDER } from '../../../../utils/constants';

export default (config: Config) => {
  return async (options: Options) => { 

    const limit: number = options.limit ? options.limit : DEFAULT_COMMENTS_PAGINATION_LIMIT; 
    const offset: number = options.offset ? options.offset : DEFAULT_COMMENTS_PAGINATION_OFFSET;
    const order: string[][] = options.order ? createOrderObject(options.order) : DEFAULT_COMMENTS_ORDER;  

    const {count, rows} = await config.models.Comment.findAndCountAll({
      attributes: COMMENT_MODEL_VISIBLE_PROPERTIES,
      limit,
      offset,
      order
    });

    return paginate({ 
      total: count,
      paginatedData: rows,
      baseUrl: `${API_ROUTE_V1}/comments`,
      offset,
      limit
    });
   }; 
}