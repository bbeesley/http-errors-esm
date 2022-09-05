import statuses from 'statuses';
import { writeFile } from 'fs/promises';
import toIdentifier from 'toidentifier';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const constructors = `import { ClientError } from './client-error.js';
import { ServerError } from './server-error.js';

/* eslint-disable prettier/prettier */
`;

function codeClass(status) {
  return Number(`${String(status).charAt(0)}00`);
}

/**
 * Get a class name from a name identifier.
 * @private
 */

function toClassName(name) {
  return name.substr(-5) !== 'Error' ? `${name}Error` : name;
}

const declarations = statuses.codes.map((code) => {
  const name = toIdentifier(statuses.message[code]);
  const className = toClassName(name);
  const errorCreatorName =
    codeClass(code) === 400
      ? 'ClientError'
      : codeClass(code) === 500
      ? 'ServerError'
      : undefined;
  if (!errorCreatorName) return undefined;
  return `export class ${className} extends ${errorCreatorName} {
  constructor(message?: string) {
    super(message ?? '${(statuses.message[code] ?? '').replace(/'/, "\\'")}');
    this.name = '${className}';
    this.status = ${code};
    this.statusCode = ${code};
    this.expose = ${code < 500};
  }
}
`;
});

const errorClassesSrc = [
  constructors,
  ...declarations.filter((e) => e !== undefined),
  '/* eslint-enable prettier/prettier */\n',
].join('\n');

await writeFile(resolve(__dirname, './src/error-classes.ts'), errorClassesSrc);
