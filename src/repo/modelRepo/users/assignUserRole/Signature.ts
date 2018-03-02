import AsyncHandler from '../../../../utils/AsyncHandler';

export interface Options {
  readonly userId: string;
  readonly roleId: string;
}

type Signature = AsyncHandler<Options, any>;

export default Signature;