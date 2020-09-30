// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { Bytes, U256, u32 } from '@polkadot/types/primitive';
import { AccountId } from '@polkadot/types/interfaces/runtime';
import { AmountType } from 'bool-network-js/interfaces/dex';

/** @name PairT */
export interface PairT extends Struct {
  readonly token0: Bytes;
  readonly token1: Bytes;
  readonly address: AccountId;
  readonly totalsupply: AmountType;
  readonly reserve0: AmountType;
  readonly reserve1: AmountType;
  readonly blocktimestamp_last: u32;
  readonly price0_cumulative_last: U256;
  readonly price1_cumulative_last: U256;
  readonly klast: U256;
}

export type PHANTOM_UNISWAP = 'uniswap';
