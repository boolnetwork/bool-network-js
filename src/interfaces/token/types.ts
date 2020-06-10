// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct } from "@polkadot/types/codec";
import { Bytes, u128, u64 } from "@polkadot/types/primitive";
import { AccountId } from "@polkadot/types/interfaces/runtime";

/** @name ChainKind */
export interface ChainKind extends Enum {
    readonly isBool: boolean;
    readonly isEth: boolean;
    readonly isCita: boolean;
}

/** @name DepositDetail */
export interface DepositDetail extends Struct {
    readonly uid: Bytes;
    readonly actor: Bytes;
    readonly token: Bytes;
    readonly value: u128;
    readonly receiver: AccountId;
    readonly chain: Bytes;
}

/** @name TokenControl */
export interface TokenControl extends Enum {
    readonly isFree: boolean;
    readonly isLock: boolean;
}

/** @name TokenDetail */
export interface TokenDetail extends Struct {
    readonly uid: u64;
    readonly name: Bytes;
    readonly address: Bytes;
    readonly chain: Bytes;
    readonly precision: u64;
    readonly extra: Bytes;
    readonly identity: Bytes;
}

/** @name WithdrawDetail */
export interface WithdrawDetail extends Struct {
    readonly uid: u64;
    readonly actor: AccountId;
    readonly token: Bytes;
    readonly value: u128;
    readonly receiver: Bytes;
}

export type PHANTOM_TOKEN = "token";
