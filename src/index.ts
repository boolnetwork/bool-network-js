import * as polkaApi from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';
import { rpc } from './rpc';
import { customType } from './type';

export const Greeter = (name: string) => `Hello ${name}`;

export const tom: [string, number] = ['Tom', 25];

export const BoolApi = async (url: string) => {
    const provider = new polkaApi.WsProvider('ws://127.0.0.1:9944/');
    const options: ApiOptions = {
        types: customType,
        provider: provider,
        rpc: rpc
    }
    const api = await polkaApi.ApiPromise.create(options);
    return api;
}


/**

#. how to create instance?
let api = new BoolApi({option});

#. how to use?
    * The original function does not change

    * Add extension module to fetch some complex state.
    example  api.extension.dex.send()
    
 */
