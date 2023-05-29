FROM node:18.16.0-bullseye-slim

RUN apt-get update
RUN apt-get install -y dumb-init

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . /usr/src/app

ENV NODE_ENV production

RUN npm ci --only=production

CMD ["dumb-init", "node", "./bin/www"]

