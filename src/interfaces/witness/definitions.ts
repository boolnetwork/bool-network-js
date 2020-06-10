export default {
    types: {
        AuthorInfo: {
            previous: "(Vec<H160>, u32)",
            current: "(Vec<H160>, u32)",
            uid: "u64"
        },
        WitnessType: {
            _enum: {
                Admin: "Null",
                Single: "Vec<u8>"
            }
        },
        WitnessProposal: {
            message: "Vec<u8>",
            signatures: "Vec<(H160, Vec<u8>)>",
            ty: "Vec<u8>",
            finalize: "bool",
            end: "bool"
        },
        StatisticsInfo: {
            unreleased: "BTreeSet<u64>",
            maximum: "u64"
        }
    }
};
