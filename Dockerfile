# build
FROM node:12.14.1-alpine3.11 as build-stage

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN yarn install

# build a production ready app
RUN yarn run build

# deploy
FROM nginx:1.17.7-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

