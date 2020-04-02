export default {
    types: {
        Params: {
            max_bits: 'u32',
            block_max_future: 'u32',
        },
        ProposalContents: 'Vec<u8>',
        ProposalTitle: 'Vec<u8>'
    },
    rpc: {
        nextIndex: {
          alias: ['system_accountNextIndex'],
          description: 'Retrieves the next accountIndex as available on the node',
          params: [
            {
              name: 'accountId',
              type: 'AccountId'
            }
          ],
          type: 'Index'
        }
      }
};
