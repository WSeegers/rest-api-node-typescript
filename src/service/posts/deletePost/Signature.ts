import AsyncHandler from '../../../utils/AsyncHandler';

export interface Options {
  readonly id: number;  
}

type Signature = AsyncHandler<Options, any>;

export default Signature;