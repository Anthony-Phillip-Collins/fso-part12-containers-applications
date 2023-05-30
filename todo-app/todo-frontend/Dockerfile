FROM node:18.16.0-bullseye-slim AS build

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:3000/

RUN npm ci --only=production

RUN npm run build



FROM nginx:1.25.0-bullseye

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]