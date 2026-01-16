import type { TypedArray } from 'is-typed-array';

declare namespace typedArrayBuffer{
	export type { TypedArray };
}

declare function typedArrayBuffer(x: typedArrayBuffer.TypedArray): ArrayBufferLike;

export = typedArrayBuffer;
