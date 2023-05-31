# React application

This application is created from create-react-app.

Install dependencies with `npm install`

You can run the application in development mode with `npm start`

You can build static files for production release with `npm run build`

You can run tests with `npm run test`

## Environment variables

Use REACT_APP_BACKEND_URL to set where the backend for this application is.

## npm scripts

### Start/Stop

Use `docker compose up` / `npm run docker:up` and `docker compose down` / `npm run docker:down` to start/stop/rebuild.

The other scripts such as

- `npm run docker:rm`
- `npm run docker:run`
- `npm run docker:rebuild`
- `npm run docker:stop`
- `npm run docker:start`

still work, but the are just the manual way of doing what `docker compose` does.

Read [this](https://stackoverflow.com/questions/41322541/rebuild-docker-container-on-file-changes) for a good explanation.

### Test

build test stage:

```
npm run docker:test:build
```

run test:

```
npm run docker:test:run
```
