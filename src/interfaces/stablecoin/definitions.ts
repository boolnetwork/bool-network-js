export default {
    types: {
        PawnType: {
            rate: 'Balance',
            clear_ratio: 'Balance',
            debt: 'Balance',
            penalty: 'Balance',
            ceiling: 'Balance',
            floor: 'Balance',
            lock: 'Balance'
        },
        Vault: {
            pawn: 'Balance',
            debt: 'Balance',
            edit_time: 'Moment',
            cliff: 'Balance',
            rate: 'Balance'
        },
        List: {
            prev: 'u64',
            next: 'u64'
        },
        AccountList: {
            prev: 'AccountId',
            next: 'AccountId'
        },
        Bids: {
            bid: 'Balance',
            lot: 'Balance',
            guy: 'AccountId',
            tic: 'Moment',
            end: 'Moment',
            usr: 'AccountId',
            target_price: 'Balance',
            start: 'Moment',
            vault: 'u64',
            pawn_type: 'Vec<u8>'
        },
        Feed: {
            price: 'Balance',
            has: 'bool'
        }
    }
};
