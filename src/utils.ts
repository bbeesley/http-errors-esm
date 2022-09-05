import statuses from 'statuses';
import toIdentifier from 'toidentifier';

import type * as errorClasses from './error-classes.js';
import { HttpError } from './http-error.js';

/**
 * ValueOf
 * Creates a type union of all the value types on `T`.
 * Eg const values: ValueOf<MyInterface>[] = Object.values(thing); // where thing is of type MyInterface
 *
 * @alias ValueOf
 */
export type ValueOf<T> = T[keyof T];

export type ErrorClasses = { [key: string]: ValueOf<typeof errorClasses> };

export function codeClass(status: number): number {
  return Number(`${String(status).charAt(0)}00`);
}

export function getMessage(code: number): string | undefined {
  return statuses.message[code];
}

export function getIdentifier(code: string | number | undefined): string {
  if (!code) return 'HttpError';
  return typeof code === 'number'
    ? toIdentifier(getMessage(code) ?? 'HttpError')
    : code;
}

export function getStatus(code: string | number | undefined): number {
  if (!code) return 0;
  return typeof code === 'number' ? code : statuses.code[code] ?? 0;
}

export function isHttpError(err: unknown): boolean {
  return err instanceof HttpError;
}

/**
 * Get a class name from a name identifier.
 * @private
 */

export function toClassName(name: string): string {
  return name.endsWith('Error') ? name : `${name}Error`;
}
