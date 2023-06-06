# React application

This application is created from create-react-app.

Install dependencies with `npm install`

You can run the application in development mode with `npm start`

You can build static files for production release with `npm run build`

You can run tests with `npm run test`

## Environment variables

Use REACT_APP_BACKEND_URL to set where the backend for this application is.

## NPM Scripts

### Production

Build  
`npm run docker:build`

Start  
`npm run docker:up`

Stop  
`npm run docker:down`

### Development

Build  
`npm run docker:dev:build`

Start  
`npm run docker:dev:up`

Stop  
`npm run docker:dev:down`

### Test

Build _Test Layer_ in Dockerfile  
`npm run docker:test:build`

Run test  
`npm run docker:test:run`

### Legacy scripts

The other scripts such as

- `npm run docker:rm`
- `npm run docker:run`
- `npm run docker:rebuild`
- `npm run docker:stop`
- `npm run docker:start`

are just for reference. They are the manual way of doing what `docker compose` does.

Read [this](https://stackoverflow.com/questions/41322541/rebuild-docker-container-on-file-changes) for a good explanation.
