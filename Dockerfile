# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm ci 

# COPY . . 

# CMD [ "npm", "run", "build" ]



FROM node:22-alpine AS build-stage

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build



FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]