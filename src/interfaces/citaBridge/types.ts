// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from "@polkadot/types/types";
import { Enum, Struct, Vec } from "@polkadot/types/codec";
import { Bytes, u64 } from "@polkadot/types/primitive";
import { H160 } from "@polkadot/types/interfaces/runtime";

/** @name Authorities */
export interface Authorities extends Enum {
    readonly isSameAs: boolean;
    readonly asSameAs: u64;
    readonly isNewList: boolean;
    readonly asNewList: ITuple<[Vec<H160>, AuthoritiesChangeType]>;
}

/** @name AuthoritiesChangeType */
export interface AuthoritiesChangeType extends Enum {
    readonly isAddAuthority: boolean;
    readonly asAddAuthority: H160;
    readonly isDeleteAuthority: boolean;
    readonly asDeleteAuthority: H160;
    readonly isInit: boolean;
}

/** @name CitaHeader */
export interface CitaHeader extends Struct {
    readonly prevhash: Bytes;
    readonly timestamp: u64;
    readonly height: u64;
    readonly state_root: Bytes;
    readonly transactions_root: Bytes;
    readonly receipts_root: Bytes;
    readonly hash: Bytes;
}

export type PHANTOM_CITABRIDGE = "citaBridge";
