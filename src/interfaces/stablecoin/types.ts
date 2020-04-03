// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { Bytes, u64 } from '@polkadot/types/primitive';
import { AccountId, Balance, Moment } from '@polkadot/types/interfaces/runtime';

/** @name AccountList */
export interface AccountList extends Struct {
  readonly prev: AccountId;
  readonly next: AccountId;
}

/** @name Bids */
export interface Bids extends Struct {
  readonly bid: Balance;
  readonly lot: Balance;
  readonly guy: AccountId;
  readonly tic: Moment;
  readonly end: Moment;
  readonly usr: AccountId;
  readonly target_price: Balance;
  readonly start: Moment;
  readonly vault: u64;
  readonly pawn_type: Bytes;
}

/** @name Feed */
export interface Feed extends Struct {
  readonly price: Balance;
  readonly _has: boolean;
}

/** @name List */
export interface List extends Struct {
  readonly prev: u64;
  readonly next: u64;
}

/** @name PawnType */
export interface PawnType extends Struct {
  readonly rate: Balance;
  readonly clear_ratio: Balance;
  readonly debt: Balance;
  readonly penalty: Balance;
  readonly ceiling: Balance;
  readonly floor: Balance;
  readonly lock: Balance;
}

/** @name Time */
export interface Time extends Moment {}

/** @name Vault */
export interface Vault extends Struct {
  readonly pawn: Balance;
  readonly debt: Balance;
  readonly edit_time: Moment;
  readonly cliff: Balance;
  readonly rate: Balance;
}

export type PHANTOM_STABLECOIN = 'stablecoin';
