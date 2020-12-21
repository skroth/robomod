FROM node:15
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

CMD [ "node", "src/index.js" ]