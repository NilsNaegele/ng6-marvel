// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://gateway.marvel.com/v1/public/',
  apiKey: 'd1196d21424af35ccfc3c1ee234d467d',
  settings: {
    appErrorPrefix: '[NG6-MARVEL Error] ',
    appTitle: 'ng6-marvel',
    version: '0.0.3'
  }
};
