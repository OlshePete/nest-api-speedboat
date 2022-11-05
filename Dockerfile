# Build stage (LTS Node.js, for more information see https://nodejs.org/en/about/releases/)
FROM node:12.19.0-alpine3.9

RUN apk add --no-cache bash

RUN addgroup -S service && adduser -S service -G service -h /service -s /bin/bash -u 1001

# set current user
USER service
# set working directory
WORKDIR /service
# dependencies
COPY package.json ./

RUN npm install 


# add `/service/node_modules/.bin` to $PATH
ENV PATH /service/node_modules/.bin:$PATH

# source code
# COPY src ./src
# COPY index.js ./
# COPY .babelrc ./
# COPY jsconfig.json ./
# COPY nest-cli.json ./
# COPY nodemon.json ./

COPY . .

RUN npm run start:dev

EXPOSE 5555

ENTRYPOINT ["node","index", "--exec", "babel-node"]

