// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBP1AdnsFRIrClE5hrC6JYqkYZxdT-UizA',
    authDomain: 'codenames-238a3.firebaseapp.com',
    databaseURL: 'https://codenames-238a3.firebaseio.com',
    projectId: 'codenames-238a3',
    storageBucket: 'codenames-238a3.appspot.com',
    messagingSenderId: '389601022706'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
