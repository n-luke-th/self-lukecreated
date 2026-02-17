FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.template.conf /etc/nginx/templates/default.conf.template
COPY . /usr/share/nginx/html

CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]