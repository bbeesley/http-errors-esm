import test from 'ava';

import { createError } from './index.js';

test('should create error object', (t) => {
  t.notThrows(() => createError(500));
});
test('when status 300 -> should have "message" property of "Multiple Choices"', (t) => {
  t.is(createError(300).message, 'Multiple Choices');
});

test('when status 300 -> should have "name" property of "Error"', (t) => {
  t.is(createError(300).name, 'Error');
});

test('when status 300 -> should have "status" property of 300', (t) => {
  t.is(createError(300).status, 300);
});

test('when status 300 -> should have "statusCode" property of 300', (t) => {
  t.is(createError(300).statusCode, 300);
});

test('when status 404 -> should have "message" property of "Not Found"', (t) => {
  t.is(createError(404).message, 'Not Found');
});

test('when status 404 -> should have "name" property of "NotFoundError"', (t) => {
  t.is(createError(404).name, 'NotFoundError');
});

test('when status 404 -> should have "status" property of 404', (t) => {
  t.is(createError(404).status, 404);
});

test('when status 404 -> should have "statusCode" property of 404', (t) => {
  t.is(createError(404).statusCode, 404);
});

test('when status unknown 4xx -> should have "message" property of "Bad Request"', (t) => {
  t.is(createError(499).message, 'Bad Request');
});

test('when status unknown 4xx -> should have "name" property of "BadRequestError"', (t) => {
  t.is(createError(499).name, 'BadRequestError');
});

test('when status unknown 4xx -> should have "status" property with code', (t) => {
  t.is(createError(499).status, 499);
});

test('when status unknown 4xx -> should have "statusCode" property with code', (t) => {
  t.is(createError(499).statusCode, 499);
});

test('when status unknown 5xx -> should have "message" property of "Internal Server Error"', (t) => {
  t.is(createError(599).message, 'Internal Server Error');
});

test('when status unknown 5xx -> should have "name" property of "InternalServerError"', (t) => {
  t.is(createError(599).name, 'InternalServerError');
});

test('when status unknown 5xx -> should have "status" property with code', (t) => {
  t.is(createError(599).status, 599);
});

test('when status unknown 5xx -> should have "statusCode" property with code', (t) => {
  t.is(createError(599).statusCode, 599);
});

test('when a message is passed -> should have "message" property with message', (t) => {
  t.is(createError(404, 'missing').message, 'missing');
});

test('when a message is passed -> should have "status" property with status', (t) => {
  t.is(createError(404, 'missing').status, 404);
});

test('when a message is passed -> should have "statusCode" property with status', (t) => {
  t.is(createError(404, 'missing').statusCode, 404);
});
