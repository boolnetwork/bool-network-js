export default {
    types: {
        MakerProposal: {
            transaction_data: 'Vec<u8>',
            start: 'Moment',
            end: 'Moment',
            open: 'bool',
            proposal_passed: 'bool',
            proposal_hash: 'Hash',
            yea: 'Balance',
            nay: 'Balance',
            creator: 'AccountId',
            deposit: 'Balance',
        },
        List: {
            prev: 'u64',
            next: 'u64'
        }
    }
};
