import AsyncHandler from '../../../utils/AsyncHandler';

export interface Options {
  readonly id: string;  
}

type Signature = AsyncHandler<Options, any>;

export default Signature;