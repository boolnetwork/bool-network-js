// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { Bytes, bool, u64 } from '@polkadot/types/primitive';
import { AccountId, Balance, Hash, Moment } from '@polkadot/types/interfaces/runtime';

/** @name DaoList */
export interface DaoList extends Struct {
  readonly prev: u64;
  readonly next: u64;
}

/** @name MakerProposal */
export interface MakerProposal extends Struct {
  readonly transaction_data: Bytes;
  readonly start: Moment;
  readonly end: Moment;
  readonly open: bool;
  readonly proposal_passed: bool;
  readonly proposal_hash: Hash;
  readonly yea: Balance;
  readonly nay: Balance;
  readonly creator: AccountId;
  readonly deposit: Balance;
}

export type PHANTOM_DAO = 'dao';
