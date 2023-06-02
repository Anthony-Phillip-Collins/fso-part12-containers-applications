# NGINX as reverse proxy

## Build

```
docker compose -f docker-compose.dev.yml build --no-cache
```

## Start

```
docker compose -f docker-compose.dev.yml up
```

## Stop

```
docker compose -f docker-compose.dev.yml down --remove-orphans
```

## List services

```
docker compose -f docker-compose.dev.yml ps
```

## Test connection

```
docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://nginx:80

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://nginx:80/api

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://api:4000

docker compose -f docker-compose.dev.yml run --rm debug-helper wget -O - http://mongo:27017
```

## Remove dangling images

```
docker image prune
```

## Reload NGINX inside container

```
docker exec -it reverse-proxy nginx -s reload
```
