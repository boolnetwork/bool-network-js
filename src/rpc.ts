
export const rpc = {
    dex: [{
        name: 'bids',
        params: [
            {
                name: 'first',
                type: 'Bytes'
            },
            {
                name: 'second',
                type: 'Bytes'
            },
            {
                name: 'sellorbuy',
                type: 'u64'
            }
        ],
        type: 'Vec<(u64, u64, Vec<u64>)>'
    }, {
        name: 'depth',
        params: [
            {
                name: 'pair',
                type: 'OrderPair'
            }
        ],
        type: 'DepthInfo'
    }],
    prove: [{
        name: 'getStateProof',
        params: [
            {
                name: 'block',
                type: 'H256',
            }, {
                name: 'key',
                type: 'Bytes'
            }
        ],
        type: 'VerifiableProof'
    }, {
        name: 'getExtrinsicProof',
        params: [
            {
                name: 'block',
                type: 'H256',
            }, {
                name: 'key',
                type: 'Bytes'
            }
        ],
        type: 'VerifiableProof'
    }, {
        name: 'verify',
        params: [
            {
                name: 'block',
                type: 'H256'
            }, {
                name: 'vp',
                type: 'VerifiableProof'
            }, {
                name: 'isState',
                type: 'bool'
            }
        ],
        type: 'bool'
    }]
}
