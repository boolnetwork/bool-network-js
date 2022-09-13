// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u64 } from '@polkadot/types-codec';
import type { Moment } from '@polkadot/types/interfaces/runtime';

/** @name OraclePrice */
export interface OraclePrice extends u64 {}

/** @name TimeWrapOf */
export interface TimeWrapOf extends Struct {
  readonly start: Moment;
  readonly end: Moment;
  readonly at: u64;
}

export type PHANTOM_FEED = 'feed';
