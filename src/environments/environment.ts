// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env: 'LOCAL',
  //baseAPIUrl: 'https://auction-backend-sys.herokuapp.com/api/v1',
  baseAPIUrl: 'http://localhost:80/auction-system-api/api/v1',
  api: {
    user: 'users',
    address: 'addresses',
    auction: 'auctions',
    bidding: 'biddings',
    category: 'categories',
    purchasing: 'purchases',
    authorization: 'auth',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
