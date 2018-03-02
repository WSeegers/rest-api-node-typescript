
import globalConfig from '../config';
const env:string = process.env.NODE_ENV || 'development';  
const config: any = {...globalConfig.knexCommon,...globalConfig.knex[env]};
export default require('knex')(config);

