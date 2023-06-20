FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm run build

RUN npm install -g serve

RUN npm install --save-dev @testing-library/react @testing-library/jest-dom

RUN npm test

CMD ["serve", "build"]