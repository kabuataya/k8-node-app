FROM node:latest


LABEL DEVELOPER="Karam Abuataya" EMAIL="kabuataya@gmail.com" VERSION="1.0" YEAR="2020"
ENV NODE_ENV=production
ENV PORT=3000
ENV environment=prod
COPY    . /var/www
WORKDIR /var/www

RUN     npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]