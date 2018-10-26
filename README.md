# octohack-front
October '18 GCP Hack Week - Front End!

Unfortunately, because we need to expose a custom endpoint in addition to serving the react app,
we have to build the app and then run the server as if it's going to production.

Therefore:

To build (whenever making changes to FE files):
`npm run build`

To start server:
`npm run serve`

There is no hot-reloading support at the moment. We'll have to eject the app to add that.
