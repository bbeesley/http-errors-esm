import { ClientError } from './client-error.js';
import * as errorClasses from './error-classes.js';
import { HttpError } from './http-error.js';
import { ServerError } from './server-error.js';
import {
  codeClass,
  ErrorClasses,
  getIdentifier,
  toClassName,
} from './utils.js';

export interface CreateErrorOptions {
  status?: number | undefined;
  id?: number | undefined;
  statusCode?: number | undefined;
  name?: string | undefined;
  message?: string | undefined;
}

export function createError<T extends ClientError | ServerError>(
  code = 500,
  message: string | undefined = undefined,
): T | ClientError | ServerError | HttpError {
  const className = toClassName(getIdentifier(code));
  const ErrorClass = (errorClasses as ErrorClasses)[className];
  if (ErrorClass) return new ErrorClass(message);
  const DefaultErrorClass =
    codeClass(code) === 400
      ? ClientError
      : codeClass(code) === 500
      ? ServerError
      : HttpError;
  const err = new DefaultErrorClass(message, undefined, code);
  return err;
}
