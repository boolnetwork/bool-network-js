export default {
    types: {
        ChainKind: {
            _enum: ['BOOL', 'ETH', 'CITA']
        },
        TokenDetail: {
            uid: 'u64',
            name: 'Vec<u8>',
            address: 'Vec<u8>',
            chain: 'Vec<u8>',
            precision: 'u64',
            extra: 'Vec<u8>',
            identity: 'Vec<u8>'
        },
        TokenControl: {
            _enum: ['Free', 'Lock']
        },
        WithdrawDetail: {
            uid: 'u64',
            actor: 'AccountId',
            token: 'Vec<u8>',
            value: 'u128',
            receiver: 'Vec<u8>'
        },
        DepositDetail: {
            uid: 'Vec<u8>',
            actor: 'Vec<u8>',
            token: 'Vec<u8>',
            value: 'u128',
            receiver: 'AccountId',
            chain: 'Vec<u8>'
        }
    }
};
