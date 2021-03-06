# build
FROM node:12.14.1-alpine3.11 as build-stage
ARG API_URL
ENV REACT_APP_API_URL ${API_URL}
ENV PORT 4002
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install --prod

# build a production ready app
RUN npm run build

# deploy
FROM nginx:1.17.7-alpine
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/nginx.conf
RUN ls -la /etc/
RUN ls -la /etc/nginx/
RUN cat /etc/nginx/nginx.conf
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build-stage /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

