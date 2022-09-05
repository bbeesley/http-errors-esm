// eslint-disable-next-line import/no-default-export
export default {
  files: ['src/**/*.test.ts', 'src/*.test.ts'],
  failFast: true,
  failWithoutAssertions: false,
  verbose: true,
  extensions: {
    ts: 'module',
  },
  nodeArguments: [
    '--loader=ts-node/esm',
    '--experimental-specifier-resolution=node',
  ],
  timeout: '1m',
};
