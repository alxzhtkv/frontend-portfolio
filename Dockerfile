FROM node:20-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN npm install

# RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "build" ]

FROM node:20-alpine as PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
EXPOSE 8080

CMD [ "npm", "run", "preview" ]

