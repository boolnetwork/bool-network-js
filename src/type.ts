export const customType = {
    "AmountType": "u128",
    "PriceType": "u128",
    "OrderType": {
        "_enum": [
            "Buy",
            "Sell"
        ]
    },
    "OrderPair": {
        "first": "Vec<u8>",
        "second": "Vec<u8>"
    },
    "CancelOrMatch": {
        "_enum": [
            "Match",
            "Cancel"
        ]
    },
    "OrderStatus": {
        "_enum": [
            "Valid",
            "Canceled",
            "Finished"
        ]
    },
    "Bid": {
        "nodeid": "u128",
        "price": "PriceType",
        "sum": "AmountType",
        "list": "Vec<u128>"
    },
    "ActionRecord": {
        "action": "Vec<u8>",
        "proof": "Vec<u8>",
        "header_hash": "H256"
    },
    "BestHeaderT": {
        "number": "u64",
        "hash": "H256"
    },
    "BidDetailT": {
        "id": "u128",
        "pair": "OrderPair",
        "order_type": "OrderType",
        "user": "AccountId",
        "price": "PriceType",
        "amount": "AmountType",
        "time": "BlockNumber"
    },
    "RegionT": {
        "id": "u64",
        "name": "Vec<u8>",
        "admin": "AccountId",
        "treasure": "AccountId",
        "taker_rate": "u32",
        "maker_rate": "u32",
        "pairs": "Vec<OrderPair>"
    },
    "OrderInfo": {
        "who": "AccountId",
        "order_type": "OrderType",
        "pair": "OrderPair",
        "amount": "AmountType",
        "price": "PriceType",
        "left": "PriceType",
        "status": "OrderStatus",
        "index": "u128",
        "time": "BlockNumber",
        "fill_index": "Vec<u128>"
    },
    "TokenDetail": {
        "uid": "u64",
        "name": "Vec<u8>",
        "address": "Vec<u8>",
        "chain": "Vec<u8>",
        "precision": "u64",
        "extra": "Vec<u8>",
        "identity": "Vec<u8>"
    },
    "Node": {
        "prev": "Option<u128>",
        "next": "Option<u128>",
        "data": "Bid"
    },
    "MultiNodeIndex": {
        "index": "u128",
        "multi_key": "(OrderPair, OrderType)"
    },
    "WithdrawDetail": {
        "uid": "u64",
        "actor": "AccountId",
        "token": "Vec<u8>",
        "value": "AmountType",
        "receiver": "Vec<u8>"
    },
    "DepositDetail": {
        "uid": "Vec<u8>",
        "actor": "Vec<u8>",
        "token": "Vec<u8>",
        "value": "AmountType",
        "receiver": "AccountId",
        "chain": "Vec<u8>"
    },
    "AuthorInfo": {
        "previous": "(Vec<H160>, u32)",
        "current": "(Vec<H160>, u32)",
        "uid": "u64"
    },
    "BlockHeaderu32": {
        "version": "u32",
        "previous_header_hash": "H256",
        "merkle_root_hash": "H256",
        "time": "u32",
        "bits": "u32",
        "nonce": "u32"
    },
    "DepthInfo": {
        "buy": "Vec<DepthItem>",
        "sell": "Vec<DepthItem>"
    },
    "DepthItem": {
        "price": "u64",
        "total": "u64"
    },
    "VerifiableProof": {
        "key": "Bytes",
        "value": "Bytes",
        "proofs": "Vec<Bytes>"
    },
    "TransportRelayTx": {
        "block_hash": "H256",
        "raw": "Transaction",
        "merkle_proof": "PartialMerkleTreeForTransport",
        "previous_raw": "Transaction"
    },
    "Transaction": {
        "version": "i32",
        "inputs": "Vec<TransactionInput>",
        "outputs": "Vec<TransactionOutput>",
        "lock_time": "u32"
    },
    "TransactionInput": {
        "previous_output": "OutPoint",
        "script_sig": "Bytes",
        "sequence": "u32",
        "script_witness": "Vec<Bytes>"
    },
    "OutPoint": {
        "hash": "H256",
        "index": "u32"
    },
    "TransactionOutput": {
        "value": "u64",
        "script_pubkey": "Bytes"
    },
    "PartialMerkleTreeForTransport": {
        "tx_count": "u32",
        "hashes": "Vec<H256>",
        "flags": "Vec<u8>"
    },
    "CandidateTx": {
        "tx": "Transaction",
        "unexpect": "bool",
        "confirmed": "bool",
        "block_hash": "H256",
        "outs": "Vec<(AccountId, u32)>",
        "outputs": "Vec<SeOutput>",
        "proposers": "Vec<AccountId>"
    },
    "SeOutput": {
        "hash": "H160",
        "val": "u32"
    },
    "BlockHeader": {
        "version": "u32",
        "previous_header_hash": "H256",
        "merkle_root_hash": "H256",
        "time": "u32",
        "bits": "Compact<u32>",
        "nonce": "u32"
    },
    "BestHeader": {
        "number": "u32",
        "hash": "H256"
    },
    "PawnType": {
        "rate": "Balance",
        "cr": "Balance",
        "nd": "Balance",
        "penalty": "Balance",
        "ceiling": "Balance",
        "floor": "Balance",
        "lock": "Balance"
    },
    "Cdp": {
        "pawn": "u128",
        "nd": "u128",
        "edit_time": "Time",
        "cliff": "u128",
        "rate": "u128"
    },
    "Bids": {
        "bid": "Balance",
        "lot": "Balance",
        "guy": "AccountId",
        "tic": "Time",
        "end": "Time",
        "usr": "AccountId",
        "td": "Balance",
        "start": "Time",
        "cdp": "u64",
        "pt": "Vec<u8>"
    },
    "List": {
        "prev": "u64",
        "next": "u64"
    },
    "Feed": {
        "price": "Balance",
        "has": "bool"
    },
    "MakerProposal": {
        "transaction_data": "Vec<u8>",
        "start": "Moment",
        "end": "Moment",
        "open": "bool",
        "proposal_passed": "bool",
        "proposal_hash": "Hash",
        "yea": "Balance",
        "nay": "Balance",
        "creator": "AccountId"
    },
    "Time": "Moment"
}
