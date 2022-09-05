// eslint-disable-next-line @typescript-eslint/naming-convention
declare function ToIdentifier(text: string): string;

declare module 'toidentifier' {
  export = ToIdentifier;
}
