FROM node:10.12.0-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD npm run serve
