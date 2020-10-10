"use strict";
exports.__esModule = true;
exports["default"] = {
    types: {
        PairT: {
            token0: "Vec<u8>",
            token1: "Vec<u8>",
            // the pair address
            address: "AccountId",
            // total liquidity for this token
            totalsupply: "AmountType",
            // total token0 in this reserve
            reserve0: "AmountType",
            // total token1 in this reserve
            reserve1: "AmountType",
            blocktimestamp_last: "u32",
            price0_cumulative_last: "U256",
            price1_cumulative_last: "U256",
            klast: "U256"
        }
    },
    rpc: {
        get_amounts_out: {
            description: "return the amount you can get",
            params: [
                {
                    name: "amountin",
                    type: "u64"
                },
                {
                    name: "path",
                    type: "Vec<Vec<u8>>"
                }
            ],
            type: "Vec<u64>"
        },
        get_amounts_in: {
            description: "return the amount you should input",
            params: [
                {
                    name: "amountout",
                    type: "u64"
                },
                {
                    name: "path",
                    type: "Vec<Vec<u8>>"
                }
            ],
            type: "Vec<u64>"
        },
        find_pairs: {
            description: "return the pair you can get",
            params: [
                {
                    name: "tokena",
                    type: "Bytes"
                }
            ],
            type: "Vec<Vec<u8>>"
        },
        list_pairs: {
            description: "return all the pairs that has been created",
            params: [],
            type: "Vec<Vec<u8>>"
        },
        account_tokens_balances: {
            description: "return the balances of tokens that a except account has",
            params: [
                {
                    name: "acc",
                    type: "AccountId"
                }
            ],
            type: "Vec<(Vec<u8>,u64)>"
        },
        get_reserves: {
            description: "return reserves",
            params: [
                {
                    name: "tokena",
                    type: "Vec<u8>"
                },
                {
                    name: "tokenb",
                    type: "Vec<u8>"
                },
            ],
            type: "(u64,u64)"
        }
    }
};
