FROM node:14-alpine

RUN mkdir /app
COPY . /app

WORKDIR /app

EXPOSE 3000

CMD ["node", "."]
