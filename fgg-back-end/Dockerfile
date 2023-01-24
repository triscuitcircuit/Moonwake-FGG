FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm uninstall oracledb
RUN npm install --save oracledb
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD [ "node", "server.js" ]

