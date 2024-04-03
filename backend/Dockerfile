#Stage 1
FROM python:latest

WORKDIR /app

RUN pip install beautifulsoup4 pymongo

RUN pip install --no-cache-dir requests


#Stage 2
FROM node:20-alpine

RUN npm i -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]