FROM nginx:alpine

COPY lib/nginx/default.conf /etc/nginx/conf.d/

COPY dist/ /opt/nginx/html
