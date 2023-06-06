# Express application

Install dependencies wit h`npm install`

Run wit h`npm start`

Or in development mode wit h`npm run dev`

# Visit counter

When running the server, visit http://localhost:4000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# SETUP

### Production

Build  
`npm run docker:build`

Start  
`npm run docker:up`

Stop  
`npm run docker:down`

Log into MongoDB:  
`npm run docker:mongo`

Log into Redis:  
`npm run docker:redis`

Debug with busybox:  
`npm run debug`

### Development

Build  
`npm run docker:dev:build`

Start  
`npm run docker:dev:up`

Stop  
`npm run docker:dev:down`

Log into MongoDB:  
`npm run docker:dev:mongo`

Log into Redis:  
`npm run docker:dev:redis`

Debug with busybox:  
`npm run debug:dev`

# Util

## Browse Mongo server

` npm run docker:mongo`

Show databases:

`show dbs`

Use database:

`use the_database`

Show collections:

`show collections`

Show all entries:

`db.todos.find({})`

## Browse Redis server

`npm run docker:redis`

Show all keys:

`KEYS *`

get values

`GET added_todos`
