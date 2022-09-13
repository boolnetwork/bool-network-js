// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { H160 } from '@polkadot/types/interfaces/runtime';

/** @name Authorities */
export interface Authorities extends Enum {
  readonly isSameAs: boolean;
  readonly asSameAs: u64;
  readonly isNewList: boolean;
  readonly asNewList: ITuple<[Vec<H160>, AuthoritiesChangeType]>;
  readonly type: 'SameAs' | 'NewList';
}

/** @name AuthoritiesChangeType */
export interface AuthoritiesChangeType extends Enum {
  readonly isAddAuthority: boolean;
  readonly asAddAuthority: H160;
  readonly isDeleteAuthority: boolean;
  readonly asDeleteAuthority: H160;
  readonly isInit: boolean;
  readonly type: 'AddAuthority' | 'DeleteAuthority' | 'Init';
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

export type PHANTOM_CITABRIDGE = 'citaBridge';
