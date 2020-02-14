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
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 4002
CMD ["nginx", "-g", "daemon off;"]

