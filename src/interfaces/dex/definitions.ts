export default {
    types: {
        PriceType: 'u128',
        AmountType: 'u128',
        OrderPair: {
            first: 'Vec<u8>',
            second: 'Vec<u8>'
        },
        OrderType: {
            _enum: ['Buy', 'Sell']
        },
        CancelOrMatch: {
            _enum: ['Match', 'Cancel']
        },
        BidT: {
            nodeid: 'u128',
            price: 'PriceType',
            sum: 'AmountType',
            list: 'Vec<u128>'
        },
        OrderStatus: {
            _enum: ['Valid', 'Canceled', 'Finished']
        },
        OrderInfo: {
            who: 'AccountId',
            ordertype: 'OrderType',
            pair: 'OrderPair',
            amount: 'AmountType',
            price: 'PriceType',
            left: 'AmountType',
            status: 'OrderStatus',
            index: 'u128',
            time: 'BlockNumber',
            fill_index: 'Vec<u128>',
            region: 'Vec<u8>'
        },
        BidDetailT: {
            id: 'u128',
            pair: 'OrderPair',
            order_type: 'OrderType',
            user: 'AccountId',
            price: 'PriceType',
            amount: 'AmountType',
            time: 'BlockNumber'
        },
        RegionT: {
            id: 'u64',
            name: 'Vec<u8>',
            admin: 'AccountId',
            treasure: 'AccountId',
            taker_rate: 'Permill',
            maker_rate: 'Permill',
            pairs: 'Vec<OrderPair>'
        },
        PerMill: 'u32',
        DepthInfo: {
            buy: 'Vec<DepthItem>',
            sell: 'Vec<DepthItem>'
        },
        DepthItem: {
            price: 'u64',
            total: 'u64'
        }
    },
    rpc: {
        bids: {
            alias: ['dex_bids'],
            description: 'Retrieve the bids information in Dex module.',
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
                },
            ],
            type: 'Vec<(u64, u64, Vec<u64>)>'
        },
        depth: {
            description: 'Get the depth of trading pair',
            params: [
                {
                    name: 'pair',
                    type: 'OrderPair'
                }
            ],
            type: 'DepthInfo'
        },
        foo: {
            description: 'For test',
            params: [
                {
                    name: 'data',
                    type: 'u32',
                },
                {
                    name: 'size',
                    type: 'u32',
                }
            ],
            type: 'Vec<u32>'
        }
    }
};
