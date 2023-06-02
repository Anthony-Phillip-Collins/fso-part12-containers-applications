FROM node:18.16.0-bullseye-slim

RUN apt-get update
RUN apt-get install -y dumb-init

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . /usr/src/app

##################################################
# If you are building your code for production
##################################################

# ENV NODE_ENV production
# RUN npm ci --only=production
# CMD ["dumb-init", "node", "./bin/www"]

##################################################
# If you are building your code for development
##################################################

RUN npm install
CMD ["dumb-init", "node", "node_modules/nodemon/bin/nodemon.js", "./bin/www"]



