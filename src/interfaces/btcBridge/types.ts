// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, bool, i32, u128, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, BlockNumber, H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name AddressHash */
export interface AddressHash extends H160 {}

/** @name BtcAddress */
export interface BtcAddress extends Struct {
  readonly kind: Type;
  readonly network: NetWork;
  readonly hash: AddressHash;
}

/** @name BTCTransaction */
export interface BTCTransaction extends Struct {
  readonly version: i32;
  readonly inputs: Vec<TransactionInput>;
  readonly outputs: Vec<TransactionOutput>;
  readonly lock_time: u32;
}

/** @name BTCTxLog */
export interface BTCTxLog extends Struct {
  readonly who: AccountId;
  readonly addr: BtcAddress;
  readonly tx_type: TxType;
  readonly balance: u64;
  readonly block_hash: H256;
  readonly time: BlockNumber;
  readonly tx: BTCTransaction;
}

/** @name CandidateTx */
export interface CandidateTx extends Struct {
  readonly tx: BTCTransaction;
  readonly unexpect: bool;
  readonly confirmed: bool;
  readonly block_hash: H256;
  readonly outs: Vec<ITuple<[AccountId, u32]>>;
  readonly uid: Vec<u64>;
}

/** @name OutPoint */
export interface OutPoint extends Struct {
  readonly hash: H256;
  readonly index: u32;
}

/** @name Params */
export interface Params extends Struct {
  readonly max_bits: u32;
  readonly block_max_future: u32;
  readonly max_fork_route_preset: u32;
  readonly target_timespan_seconds: u32;
  readonly target_spacing_seconds: u32;
  readonly retargeting_factor: u32;
  readonly double_spacing_seconds: u32;
  readonly retargeting_interval: u32;
  readonly min_timespan: u32;
  readonly max_timespan: u32;
}

/** @name TransactionInput */
export interface TransactionInput extends Struct {
  readonly previous_output: OutPoint;
  readonly script_sig: Bytes;
  readonly sequence: u32;
  readonly script_witness: Vec<Bytes>;
}

/** @name TransactionOutput */
export interface TransactionOutput extends Struct {
  readonly value: u64;
  readonly script_pubkey: Bytes;
}

/** @name TxType */
export interface TxType extends Enum {
  readonly isWithdraw: boolean;
  readonly isDeposit: boolean;
  readonly isRegister: boolean;
  readonly isRegisterDeposit: boolean;
  readonly isSendCert: boolean;
  readonly isDepositP: boolean;
}

/** @name Type */
export interface Type extends Enum {
  readonly isP2Pkh: boolean;
  readonly isP2Sh: boolean;
}

/** @name WithdrawRecord */
export interface WithdrawRecord extends Struct {
  readonly who: AccountId;
  readonly amount: u128;
  readonly add: BtcAddress;
  readonly uid: u64;
  readonly is_fin: bool;
}

export type PHANTOM_BTCBRIDGE = 'btcBridge';
