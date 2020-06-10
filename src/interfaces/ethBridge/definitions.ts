export default {
    types: {
        BestHeaderT: {
            number: "u64",
            hash: "H256"
        },
        ActionRecord: {
            index: "u64",
            proof: "Vec<u8>",
            header_hash: "H256"
        },
        EthHeader: {
            parent_hash: "H256",
            timestamp: "u64",
            number: "u64",
            author: "H160",
            transactions_root: "H256",
            uncles_hash: "H256",
            extra_data: "Bytes",
            state_root: "H256",
            receipts_root: "H256",
            log_bloom: "Bloom",
            gas_used: "U256",
            gas_limit: "U256",
            difficulty: "U256",
            seal: "Vec<Bytes>",
            the_hash: "Option<H256>"
        },
        Bloom: "[u8; 256]"
    }
};
