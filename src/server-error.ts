import { HttpError } from './http-error.js';
import { getIdentifier, getMessage, toClassName } from './utils.js';

export class ServerError extends HttpError {
  constructor(
    message: string | undefined = undefined,
    options: ErrorOptions | undefined = undefined,
    code: number | undefined = 500,
  ) {
    super(message ?? getMessage(code) ?? getMessage(500), options);
    this.name = toClassName(getIdentifier(500));
    this.status = code;
    this.statusCode = code;
    this.expose = this.status < 500;
  }
}
