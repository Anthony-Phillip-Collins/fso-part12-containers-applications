# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:4000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# SETUP

## Build

Build Mongo and Redis server:

```
npm run docker:dev:up
```

Build Express backend:

```
npm run docker:build
```

## Run

Run Mongo and Redis server:

```
npm run docker:dev:up
```

Run Express backend:

```
npm run docker:up
```

## Stop

Stop Mongo, Redis and Express backend containers and remove orphans:

```
npm run docker:down
```

# Util

## Browse mongo server with mongosh

```
 npm run docker:mongo:admin
```

Show databases:

```
show dbs
```

Use database:

```
use the_database
```

Show collections:

```
show collections
```

Show all entries:

```
db.todos.find({})
```

## Use busybox to test connections

```
npm run debug-helper
```

## Visit http://localhost:4000/
