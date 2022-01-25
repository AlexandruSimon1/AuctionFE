# Stage 1, build stage
FROM ubuntu:latest
FROM node:12.16.0-buster-slim as build
WORKDIR /app
RUN ls -l
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --configuration=production

# stage 2 nginx server for built files
FROM nginx:1.17
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/build/ /usr/share/nginx/html