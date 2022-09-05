import { ClientError } from './client-error.js';
import { ServerError } from './server-error.js';

/* eslint-disable prettier/prettier */

export class BadRequestError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Bad Request');
    this.name = 'BadRequestError';
    this.status = 400;
    this.statusCode = 400;
    this.expose = true;
  }
}

export class UnauthorizedError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Unauthorized');
    this.name = 'UnauthorizedError';
    this.status = 401;
    this.statusCode = 401;
    this.expose = true;
  }
}

export class PaymentRequiredError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Payment Required');
    this.name = 'PaymentRequiredError';
    this.status = 402;
    this.statusCode = 402;
    this.expose = true;
  }
}

export class ForbiddenError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Forbidden');
    this.name = 'ForbiddenError';
    this.status = 403;
    this.statusCode = 403;
    this.expose = true;
  }
}

export class NotFoundError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Not Found');
    this.name = 'NotFoundError';
    this.status = 404;
    this.statusCode = 404;
    this.expose = true;
  }
}

export class MethodNotAllowedError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Method Not Allowed');
    this.name = 'MethodNotAllowedError';
    this.status = 405;
    this.statusCode = 405;
    this.expose = true;
  }
}

export class NotAcceptableError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Not Acceptable');
    this.name = 'NotAcceptableError';
    this.status = 406;
    this.statusCode = 406;
    this.expose = true;
  }
}

export class ProxyAuthenticationRequiredError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Proxy Authentication Required');
    this.name = 'ProxyAuthenticationRequiredError';
    this.status = 407;
    this.statusCode = 407;
    this.expose = true;
  }
}

export class RequestTimeoutError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Request Timeout');
    this.name = 'RequestTimeoutError';
    this.status = 408;
    this.statusCode = 408;
    this.expose = true;
  }
}

export class ConflictError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Conflict');
    this.name = 'ConflictError';
    this.status = 409;
    this.statusCode = 409;
    this.expose = true;
  }
}

export class GoneError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Gone');
    this.name = 'GoneError';
    this.status = 410;
    this.statusCode = 410;
    this.expose = true;
  }
}

export class LengthRequiredError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Length Required');
    this.name = 'LengthRequiredError';
    this.status = 411;
    this.statusCode = 411;
    this.expose = true;
  }
}

export class PreconditionFailedError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Precondition Failed');
    this.name = 'PreconditionFailedError';
    this.status = 412;
    this.statusCode = 412;
    this.expose = true;
  }
}

export class PayloadTooLargeError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Payload Too Large');
    this.name = 'PayloadTooLargeError';
    this.status = 413;
    this.statusCode = 413;
    this.expose = true;
  }
}

export class URITooLongError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'URI Too Long');
    this.name = 'URITooLongError';
    this.status = 414;
    this.statusCode = 414;
    this.expose = true;
  }
}

export class UnsupportedMediaTypeError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Unsupported Media Type');
    this.name = 'UnsupportedMediaTypeError';
    this.status = 415;
    this.statusCode = 415;
    this.expose = true;
  }
}

export class RangeNotSatisfiableError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Range Not Satisfiable');
    this.name = 'RangeNotSatisfiableError';
    this.status = 416;
    this.statusCode = 416;
    this.expose = true;
  }
}

export class ExpectationFailedError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Expectation Failed');
    this.name = 'ExpectationFailedError';
    this.status = 417;
    this.statusCode = 417;
    this.expose = true;
  }
}

export class ImATeapotError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'I\'m a Teapot');
    this.name = 'ImATeapotError';
    this.status = 418;
    this.statusCode = 418;
    this.expose = true;
  }
}

export class MisdirectedRequestError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Misdirected Request');
    this.name = 'MisdirectedRequestError';
    this.status = 421;
    this.statusCode = 421;
    this.expose = true;
  }
}

export class UnprocessableEntityError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Unprocessable Entity');
    this.name = 'UnprocessableEntityError';
    this.status = 422;
    this.statusCode = 422;
    this.expose = true;
  }
}

export class LockedError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Locked');
    this.name = 'LockedError';
    this.status = 423;
    this.statusCode = 423;
    this.expose = true;
  }
}

export class FailedDependencyError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Failed Dependency');
    this.name = 'FailedDependencyError';
    this.status = 424;
    this.statusCode = 424;
    this.expose = true;
  }
}

export class TooEarlyError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Too Early');
    this.name = 'TooEarlyError';
    this.status = 425;
    this.statusCode = 425;
    this.expose = true;
  }
}

export class UpgradeRequiredError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Upgrade Required');
    this.name = 'UpgradeRequiredError';
    this.status = 426;
    this.statusCode = 426;
    this.expose = true;
  }
}

export class PreconditionRequiredError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Precondition Required');
    this.name = 'PreconditionRequiredError';
    this.status = 428;
    this.statusCode = 428;
    this.expose = true;
  }
}

export class TooManyRequestsError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Too Many Requests');
    this.name = 'TooManyRequestsError';
    this.status = 429;
    this.statusCode = 429;
    this.expose = true;
  }
}

export class RequestHeaderFieldsTooLargeError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Request Header Fields Too Large');
    this.name = 'RequestHeaderFieldsTooLargeError';
    this.status = 431;
    this.statusCode = 431;
    this.expose = true;
  }
}

export class UnavailableForLegalReasonsError extends ClientError {
  constructor(message?: string) {
    super(message ?? 'Unavailable For Legal Reasons');
    this.name = 'UnavailableForLegalReasonsError';
    this.status = 451;
    this.statusCode = 451;
    this.expose = true;
  }
}

export class InternalServerError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Internal Server Error');
    this.name = 'InternalServerError';
    this.status = 500;
    this.statusCode = 500;
    this.expose = false;
  }
}

export class NotImplementedError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Not Implemented');
    this.name = 'NotImplementedError';
    this.status = 501;
    this.statusCode = 501;
    this.expose = false;
  }
}

export class BadGatewayError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Bad Gateway');
    this.name = 'BadGatewayError';
    this.status = 502;
    this.statusCode = 502;
    this.expose = false;
  }
}

export class ServiceUnavailableError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Service Unavailable');
    this.name = 'ServiceUnavailableError';
    this.status = 503;
    this.statusCode = 503;
    this.expose = false;
  }
}

export class GatewayTimeoutError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Gateway Timeout');
    this.name = 'GatewayTimeoutError';
    this.status = 504;
    this.statusCode = 504;
    this.expose = false;
  }
}

export class HTTPVersionNotSupportedError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'HTTP Version Not Supported');
    this.name = 'HTTPVersionNotSupportedError';
    this.status = 505;
    this.statusCode = 505;
    this.expose = false;
  }
}

export class VariantAlsoNegotiatesError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Variant Also Negotiates');
    this.name = 'VariantAlsoNegotiatesError';
    this.status = 506;
    this.statusCode = 506;
    this.expose = false;
  }
}

export class InsufficientStorageError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Insufficient Storage');
    this.name = 'InsufficientStorageError';
    this.status = 507;
    this.statusCode = 507;
    this.expose = false;
  }
}

export class LoopDetectedError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Loop Detected');
    this.name = 'LoopDetectedError';
    this.status = 508;
    this.statusCode = 508;
    this.expose = false;
  }
}

export class BandwidthLimitExceededError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Bandwidth Limit Exceeded');
    this.name = 'BandwidthLimitExceededError';
    this.status = 509;
    this.statusCode = 509;
    this.expose = false;
  }
}

export class NotExtendedError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Not Extended');
    this.name = 'NotExtendedError';
    this.status = 510;
    this.statusCode = 510;
    this.expose = false;
  }
}

export class NetworkAuthenticationRequiredError extends ServerError {
  constructor(message?: string) {
    super(message ?? 'Network Authentication Required');
    this.name = 'NetworkAuthenticationRequiredError';
    this.status = 511;
    this.statusCode = 511;
    this.expose = false;
  }
}

/* eslint-enable prettier/prettier */
