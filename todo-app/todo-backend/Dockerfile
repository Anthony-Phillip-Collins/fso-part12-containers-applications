FROM node:18.16.0-bullseye-slim as base

ARG APP_PATH=/usr/src/app/

RUN apt-get update
RUN apt-get install -y dumb-init

RUN mkdir -p $APP_PATH && chown -R node:node $APP_PATH

WORKDIR $APP_PATH

FROM base as build
USER node
COPY --chown=node:node ./package.json ./package-lock.json ./
ENV NODE_ENV production
RUN npm ci --only=production
COPY --chown=node:node . ./

CMD ["dumb-init", "node", "./bin/www"]