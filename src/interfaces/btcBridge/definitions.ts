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
            addr: 'BtcAddress',
            tx_type: 'TxType',
            balance: 'u64',
            block_hash: 'H256',
            time: 'BlockNumber',
            tx: 'BTCTransaction'
        },
        BtcAddress: {
            kind: 'ScriptType',
            network: 'NetWork',
            hash: 'AddressHash'
        },
        NetWork: {
            _enum: ['Main', 'Test']
        },
        AddressHash: 'H160',
        ScriptType: {
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
        WithdrawRecordT: {
            who: 'AccountId',
            amount: 'u128',
            add: 'BtcAddress',
            uid: 'u64',
            is_fin: 'bool'
        },
        BestHeader: {
            number: 'u64',
            hash: 'H256'
        },
        BlockHeader: {
            version: 'u32',
            previous_header_hash: 'H256',
            merkle_root_hash: 'H256',
            time: 'u32',
            bits: 'Compact<u32>',
            nonce: 'u32',
        },
        BlockHeaderu32: {
            version: 'u32',
            previous_header_hash: 'H256',
            merkle_root_hash: 'H256',
            time: 'u32',
            bits: 'u32',
            nonce: 'u32',
        },
        TransportRelayTx: {
            block_hash: 'H256',
            raw: 'BTCTransaction',
            merkle_proof: 'PartialMerkleTreeForTransport',
            previous_raw: 'BTCTransaction'
        },
        PartialMerkleTreeForTransport: {
            tx_count: 'u32',
            hashes: 'Vec<H256>',
            flags: 'Vec<u8>'
        },
        UTXO: {
            txid: 'H256',
            index: 'u32',
            balance: 'u64',
            is_spent: 'bool'
        }
    }
};
