// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from "@polkadot/types/types";
import { BTreeSet, Enum, Struct, Vec } from "@polkadot/types/codec";
import { Bytes, bool, u32, u64 } from "@polkadot/types/primitive";
import { H160 } from "@polkadot/types/interfaces/runtime";

/** @name AuthorInfo */
export interface AuthorInfo extends Struct {
    readonly previous: ITuple<[Vec<H160>, u32]>;
    readonly current: ITuple<[Vec<H160>, u32]>;
    readonly uid: u64;
}

/** @name StatisticsInfo */
export interface StatisticsInfo extends Struct {
    readonly unreleased: BTreeSet<u64>;
    readonly maximum: u64;
}

/** @name WitnessProposal */
export interface WitnessProposal extends Struct {
    readonly message: Bytes;
    readonly signatures: Vec<ITuple<[H160, Bytes]>>;
    readonly ty: Bytes;
    readonly finalize: bool;
    readonly end: bool;
}

/** @name WitnessType */
export interface WitnessType extends Enum {
    readonly isAdmin: boolean;
    readonly isSingle: boolean;
    readonly asSingle: Bytes;
}

export type PHANTOM_WITNESS = "witness";
