# NGINX as reverse proxy

## Build

```
docker compose -f docker-compose.dev.yml build --no-cache
```

or

```
npm run docker:build
```

## Start

```
docker compose -f docker-compose.dev.yml up
```

or

```
npm run docker:up
```

## Stop

```
docker compose -f docker-compose.dev.yml down --remove-orphans
```

or

```
npm run docker:down
```

## List services

```
docker compose -f docker-compose.dev.yml ps
```

or

```
npm run docker:ps
```

## Test connection

```
docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://nginx:80

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://nginx:80/api

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://api:4000

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://mongo:27017
```

or

```
npm run docker:test
```

## Remove dangling images

```
docker image prune
```

or

```
npm run docker:prune
```

## Reload NGINX inside container

```
docker exec -it reverse-proxy nginx -s reload
```

or

```
npm run docker:proxy:reload
```
