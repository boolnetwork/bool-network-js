export default {
    types: {
        Params: {
            max_bits: 'u32',
            block_max_future: 'u32',
            max_fork_route_preset: 'u32',
            target_timespan_seconds: 'u32',
            target_spacing_seconds: 'u32',
            retargeting_factor: 'u32',
            double_spacing_seconds: 'u32',
            retargeting_interval: 'u32',
            min_timespan: 'u32',
            max_timespan: 'u32'
        },
        TxType: {
            _enum: ['Withdraw', 'Deposit', 'Register', 'RegisterDeposit', 'SendCert', 'DepositP'],
        },
        CandidateTx: {
            tx: 'BTCTransaction',
            unexpect: 'bool',
            confirmed: 'bool',
            block_hash: 'H256',
            outs: 'Vec<(AccountId, u32)>',
            uid: 'Vec<u64>'
        },
        BTCTxLog: {
            who: 'AccountId',
            addr: 'Address',
            tx_type: 'TxType',
            balance: 'u64',
            block_hash: 'H256',
            time: 'BlockNumber',
            tx: 'BTCTransaction'
        },
        Address: {
            kind: 'Type',
            network: 'NetWork',
            hash: 'AddressHash'
        },
        AddressHash: 'H160',
        Type: {
            _enum: ['P2PKH', 'P2SH']
        },
        BTCTransaction: {
            version: 'i32',
            inputs: 'Vec<TransactionInput>',
            outputs: 'Vec<TransactionOutput>',
            lock_time: 'u32'
        },
        TransactionInput: {
            previous_output: 'OutPoint',
            script_sig: 'Bytes',
            sequence: 'u32',
            script_witness: 'Vec<Bytes>'
        },
        OutPoint: {
            hash: 'H256',
            index: 'u32'
        },
        TransactionOutput: {
            value: 'u64',
            script_pubkey: 'Bytes'
        },
        WithdrawRecord: {
            who: 'AccountId',
            amount: 'u128',
            add: 'Address',
            uid: 'u64',
            is_fin: 'bool',
        }
    }
};
