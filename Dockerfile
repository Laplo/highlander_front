FROM node:12.14.1-alpine3.11

# set working directory
WORKDIR /app

# install yarn from npm
RUN npm i -g yarn

# install serve to launch built project
RUN npm install -g serve

# install and cache app dependencies
COPY . .
RUN yarn install

# build a production ready app
RUN yarn run build

# start app
CMD ["serve", "-s", "build"]
