import * as polkaApi from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';

import * as definitions from './interfaces/definitions';
import boolJsonRpc from './interfaces/jsonrpc';

export const BoolApi = async (url: string) => {
    const provider = new polkaApi.WsProvider('ws://127.0.0.1:9944/');
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    let option: ApiOptions = {
        types: {
            ...types
        },
        rpc: {
            ...boolJsonRpc
        }
    };
    const api = await polkaApi.ApiPromise.create(options);
    return api;
}
