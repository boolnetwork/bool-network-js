export default {
    types: {},
    rpc: {
        isPendingExtrinsics: {
            params: [
                {
                    name: 'hash',
                    type: 'Vec<Hash>'
                }
            ],
            type: 'Vec<bool>'
        }
    }
};
