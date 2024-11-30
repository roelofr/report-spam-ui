FROM nginx:alpine

COPY src/assets/nginx/default.conf /etc/nginx/conf.d/

COPY dist/ /srv/app

