// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u128, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, BlockNumber, Permill } from '@polkadot/types/interfaces/runtime';

/** @name AmountType */
export interface AmountType extends u128 {}

/** @name BidDetailT */
export interface BidDetailT extends Struct {
  readonly id: u128;
  readonly pair: OrderPair;
  readonly order_type: OrderType;
  readonly user: AccountId;
  readonly price: PriceType;
  readonly amount: AmountType;
  readonly time: BlockNumber;
}

/** @name BidT */
export interface BidT extends Struct {
  readonly nodeid: u128;
  readonly price: PriceType;
  readonly sum: AmountType;
  readonly list: Vec<u128>;
}

/** @name CancelOrMatch */
export interface CancelOrMatch extends Enum {
  readonly isMatch: boolean;
  readonly isCancel: boolean;
}

/** @name DepthInfo */
export interface DepthInfo extends Struct {
  readonly buy: Vec<DepthItem>;
  readonly sell: Vec<DepthItem>;
}

/** @name DepthItem */
export interface DepthItem extends Struct {
  readonly price: u64;
  readonly total: u64;
}

/** @name OrderInfo */
export interface OrderInfo extends Struct {
  readonly who: AccountId;
  readonly ordertype: OrderType;
  readonly pair: OrderPair;
  readonly amount: AmountType;
  readonly price: PriceType;
  readonly left: AmountType;
  readonly status: OrderStatus;
  readonly index: u128;
  readonly time: BlockNumber;
  readonly fill_index: Vec<u128>;
  readonly region: Bytes;
}

/** @name OrderPair */
export interface OrderPair extends Struct {
  readonly first: Bytes;
  readonly second: Bytes;
}

/** @name OrderStatus */
export interface OrderStatus extends Enum {
  readonly isValid: boolean;
  readonly isCanceled: boolean;
  readonly isFinished: boolean;
}

/** @name OrderType */
export interface OrderType extends Enum {
  readonly isBuy: boolean;
  readonly isSell: boolean;
}

/** @name PerMill */
export interface PerMill extends u32 {}

/** @name PriceType */
export interface PriceType extends u128 {}

/** @name RegionT */
export interface RegionT extends Struct {
  readonly id: u64;
  readonly name: Bytes;
  readonly admin: AccountId;
  readonly treasure: AccountId;
  readonly taker_rate: Permill;
  readonly maker_rate: Permill;
  readonly pairs: Vec<OrderPair>;
}

export type PHANTOM_DEX = 'dex';
