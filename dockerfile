# Étape 1 : Build
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Caddy
FROM caddy:2-alpine

# Site statique (Vite -> dist)
COPY --from=build /app/dist /srv

# Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443