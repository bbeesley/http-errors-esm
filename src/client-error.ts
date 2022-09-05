import { HttpError } from './http-error.js';
import { getIdentifier, getMessage, toClassName } from './utils.js';

export class ClientError extends HttpError {
  constructor(
    message: string | undefined = undefined,
    options: ErrorOptions | undefined = undefined,
    code: number | undefined = 400,
  ) {
    super(message ?? getMessage(code) ?? getMessage(400), options);
    this.name = toClassName(getIdentifier(400));
    this.status = code;
    this.statusCode = code;
    this.expose = this.status < 500;
  }
}
