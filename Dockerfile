FROM node:22-alpine AS builder

WORKDIR /app

ARG VITE_API_URL=https://3100.api.green-api.com
ENV VITE_API_URL=$VITE_API_URL

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN echo 'server { \
    listen 80; \
    server_name smoldev.ru www.smoldev.ru; \
    return 301 https://$host$request_uri; \
} \
server { \
    listen 443 ssl; \
    server_name smoldev.ru www.smoldev.ru; \
    ssl_certificate /etc/nginx/ssl/fullchain.pem; \
    ssl_certificate_key /etc/nginx/ssl/privkey.pem; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
