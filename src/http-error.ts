import { getMessage } from './utils.js';

export class HttpError extends Error {
  public override name: string;

  public status: number;

  public statusCode: number;

  public expose: boolean;

  constructor(
    message: string | undefined = undefined,
    options: ErrorOptions | undefined = undefined,
    code: number | undefined = 0,
  ) {
    super(message ?? getMessage(code), options);
    this.name = 'Error';
    this.status = code;
    this.statusCode = code;
    this.expose = this.status < 500;
  }
}
