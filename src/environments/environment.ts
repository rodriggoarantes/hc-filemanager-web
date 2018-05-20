// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyBbwcKnBntg486EAjQgBkeiLgRisTq2PE8',
    authDomain: 'rra2-ce011.firebaseapp.com',
    databaseURL: 'https://rra2-ce011.firebaseio.com',
    projectId: 'rra2-ce011',
    storageBucket: 'rra2-ce011.appspot.com',
    messagingSenderId: '624648151812'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
