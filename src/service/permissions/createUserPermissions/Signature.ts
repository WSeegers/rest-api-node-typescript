import AsyncHandler from '../../../utils/AsyncHandler';
import {RoleAttributes} from '../../../models/interfaces/role';
import {PermissionAttributes} from '../../../models/interfaces/permission';

export interface Options {
    readonly userId: string;
    readonly permissions: PermissionAttributes[];
    readonly role: RoleAttributes;    
}

type Signature = AsyncHandler<Options, void>;

export default Signature;