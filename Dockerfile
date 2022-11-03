# Build stage (LTS Node.js, for more information see https://nodejs.org/en/about/releases/)
FROM node:12.19.0-alpine3.9

# set working directory
WORKDIR /service/src/app

# dependencies
COPY package*.json ./

RUN npm install

# source code
COPY . .

RUN npm run Build

EXPOSE 5000

CMD [ "node", "dist/main" ]
