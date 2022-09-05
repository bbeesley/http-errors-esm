import test from 'ava';

import { createError, HttpError, isHttpError } from './index.js';

test('when val is undefined -> should return false', (t) => {
  t.is(isHttpError(undefined), false);
});

test('when val is null -> should return false', (t) => {
  t.is(isHttpError(null), false);
});

test('when val is a number -> should return false', (t) => {
  t.is(isHttpError(42), false);
});

test('when val is a string -> should return false', (t) => {
  t.is(isHttpError('foobar'), false);
});

test('when val is an empty object -> should return false', (t) => {
  t.is(isHttpError({}), false);
});

test('when val is a plain Error -> should return false', (t) => {
  t.is(isHttpError(new Error()), false);
});

test('when val is an instance of HttpError -> should return true', (t) => {
  const err = createError(500);

  t.truthy(err instanceof HttpError);
  t.is(isHttpError(err), true);
});
