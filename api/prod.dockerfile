FROM node:6-alpine
WORKDIR /home/node/app
COPY . /home/node/app
RUN yarn install
EXPOSE 80
CMD ["node", "src/server.js"]