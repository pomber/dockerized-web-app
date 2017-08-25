FROM node:6-alpine as builder

WORKDIR /home/node/app
COPY . /home/node/app
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=builder /home/node/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf