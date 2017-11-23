FROM node:latest

MAINTAINER Karam Abuataya

ENV NODE_ENV=production
ENV PORT=3000
ENV environment=prod
COPY    . /var/www
WORKDIR /var/www

RUN     npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]