export default {
    types: {
        CitaHeader: {
            prevhash: "Vec<u8>",
            timestamp: "u64",
            height: "u64",
            state_root: "Vec<u8>",
            transactions_root: "Vec<u8>",
            receipts_root: "Vec<u8>",
            hash: "Vec<u8>"
        },

        Authorities: {
            _enum: {
                SameAs: "u64",
                NewList: "(Vec<H160>, AuthoritiesChangeType)"
            }
        },
        AuthoritiesChangeType: {
            _enum: {
                AddAuthority: "H160",
                DeleteAuthority: "H160",
                Init: "Null"
            }
        }
    }
};
