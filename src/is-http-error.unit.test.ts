/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle */
import test from 'ava';
import { isNativeError } from 'util/types';

import {
  createError,
  HttpError,
  InternalServerError,
  NotFoundError,
} from './index.js';

test('createError(status)', (t) => {
  const err = createError(404);
  t.is(err.name, 'NotFoundError');
  t.is(err.message, 'Not Found');
  t.is(err.status, 404);
  t.is(err.statusCode, 404);
});

test('createError(status, message)', (t) => {
  const err = createError(404, 'idk');
  t.is(err.name, 'NotFoundError');
  t.is(err.message, 'idk');
  t.is(err.status, 404);
  t.is(err.statusCode, 404);
});

test('createError(nothing, msg)', (t) => {
  const err = createError(undefined, 'LOL');
  t.is(err.name, 'InternalServerError');
  t.is(err.message, 'LOL');
  t.is(err.status, 500);
  t.is(err.statusCode, 500);
});

test('new NotFoundError()', (t) => {
  const err = new NotFoundError();
  t.is(err.name, 'NotFoundError');
  t.is(err.message, 'Not Found');
  t.is(err.status, 404);
  t.is(err.statusCode, 404);
  t.is(err.expose, true);
  t.truthy(err.stack);
});

test('new InternalServerError()', (t) => {
  const err = new InternalServerError();
  t.is(err.name, 'InternalServerError');
  t.is(err.message, 'Internal Server Error');
  t.is(err.status, 500);
  t.is(err.statusCode, 500);
  t.is(err.expose, false);
  t.truthy(err.stack);
});

test('should preserve error [[Class]]', (t) => {
  t.is(
    Object.prototype.toString.call(createError(undefined, 'LOL')),
    '[object Error]',
  );
});

test('should support err instanceof Error', (t) => {
  t.true(createError(404) instanceof Error);
});

test('should support err instanceof exposed constructor', (t) => {
  t.true(createError(404) instanceof NotFoundError);
  t.true(createError(500) instanceof InternalServerError);
  t.true(new NotFoundError() instanceof NotFoundError);
  t.true(new InternalServerError() instanceof InternalServerError);
});

test('should support err instanceof HttpError', (t) => {
  t.true(createError(404) instanceof HttpError);
});

test('should support isNativeError()', (t) => {
  t.true(isNativeError(createError(404)));
});
/* eslint-enable @typescript-eslint/naming-convention, no-underscore-dangle */
