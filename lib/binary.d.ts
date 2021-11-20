/// <reference types="node" />
import BN from "bn.js";
export declare class BinaryWriter {
    buf: Buffer;
    length: number;
    constructor();
    maybeResize(): void;
    writeU8(value: number): void;
    writeU16(value: number): void;
    writeU32(value: number): void;
    writeU64(value: number | BN): void;
    writeU128(value: number | BN): void;
    writeU256(value: number | BN): void;
    writeU512(value: number | BN): void;
    private writeBuffer;
    writeString(str: string): void;
    writeFixedArray(array: Uint8Array): void;
    writeArray(array: any[], fn: any): void;
    toArray(): Uint8Array;
}
export declare class BinaryReader {
    buf: Buffer;
    offset: number;
    constructor(buf: Buffer);
    readU8(): number;
    readU16(): number;
    readU32(): number;
    readU64(): BN;
    readU128(): BN;
    readU256(): BN;
    readU512(): BN;
    private readBuffer;
    readString(): string;
    readFixedArray(len: number): Uint8Array;
    readArray(fn: any): any[];
}
