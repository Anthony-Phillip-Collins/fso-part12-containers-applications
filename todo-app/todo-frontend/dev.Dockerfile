FROM node:18.16.0-bullseye-slim AS base
WORKDIR /usr/src/app
ENV WDS_SOCKET_HOST=127.0.0.1
COPY . .
RUN npm i
CMD ["npm", "start"]