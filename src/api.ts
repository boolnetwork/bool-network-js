import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';

import * as definitions from './interfaces/definitions';
import boolJsonRpc from './interfaces/jsonrpc';

export const CreateApi = async (provider: WsProvider, option?: ApiOptions) => {
    const boolTypes = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    let { types = {}, rpc = {}, ...others }: ApiOptions = option;
    let boolOption: ApiOptions = {
        types: {
            ...boolTypes
        },
        rpc: {
            ...boolJsonRpc
        },
        provider: provider
    };
    const api = await ApiPromise.create(boolOption);
    return api;
};

export { WsProvider } from '@polkadot/api';
