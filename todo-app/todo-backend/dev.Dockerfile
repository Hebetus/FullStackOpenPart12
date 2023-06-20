FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install nodemon

CMD ["npm", "run", "dev"]