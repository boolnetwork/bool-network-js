// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, U256, u64 } from '@polkadot/types/primitive';
import { H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name ActionRecord */
export interface ActionRecord extends Struct {
  readonly index: u64;
  readonly proof: Bytes;
  readonly header_hash: H256;
}

/** @name BestHeaderT */
export interface BestHeaderT extends Struct {
  readonly number: u64;
  readonly hash: H256;
}

/** @name Bloom */
export interface Bloom extends U8aFixed {}

/** @name EthHeader */
export interface EthHeader extends Struct {
  readonly parent_hash: H256;
  readonly timestamp: u64;
  readonly number: u64;
  readonly author: H160;
  readonly transactions_root: H256;
  readonly uncles_hash: H256;
  readonly extra_data: Bytes;
  readonly state_root: H256;
  readonly receipts_root: H256;
  readonly log_bloom: Bloom;
  readonly gas_used: U256;
  readonly gas_limit: U256;
  readonly difficulty: U256;
  readonly seal: Vec<Bytes>;
  readonly the_hash: Option<H256>;
}

export type PHANTOM_ETHBRIDGE = 'ethBridge';
