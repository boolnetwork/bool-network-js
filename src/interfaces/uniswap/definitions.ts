export default {
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
            klast: "U256",
        
        }
    }
}