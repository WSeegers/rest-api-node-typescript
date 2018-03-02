import AsyncHandler from '../../../utils/AsyncHandler';
import {PermissionAttributes} from '../../../models/interfaces/permission';

export interface Options {
  readonly id: string;  
}

type Signature = AsyncHandler<Options, PermissionAttributes>;

export default Signature;