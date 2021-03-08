FROM node:14.16-alpine

EXPOSE 10001

WORKDIR /home/app/

COPY package.json .

RUN npm install --only=production

COPY . .

CMD ["./bin/server.js"]
