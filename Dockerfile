# Stage 1, build stage
FROM node:16.13.0-buster-slim as build
WORKDIR app
COPY package*.json /app/
RUN npm install
RUN npm install -g npm@8.3.2
COPY ./ /app/
RUN npm run build -- --configuration=production

# stage 2 nginx server for built files
FROM nginx:1.17
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /usr/share/nginx/html