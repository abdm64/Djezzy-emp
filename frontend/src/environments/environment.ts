// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
    apiKey: "AIzaSyDhQM84pi3i4wWfJwFcKJ7_GVTAWUut63c",
    authDomain: "djezzy-in.firebaseapp.com",
    databaseURL: "https://djezzy-in.firebaseio.com",
    projectId: "djezzy-in",
    storageBucket: "djezzy-in.appspot.com",
    messagingSenderId: "256452775900",
    appId: "1:256452775900:web:77ca342f409be124c3c919",
    measurementId: "G-E1DD0YL80Y"
  },
  api : "http://localhost:3000/api/v1/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
