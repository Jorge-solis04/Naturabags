# === Stage 1: Build ===
FROM node:22-alpine AS build
WORKDIR /app

# Habilitar pnpm vía corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Instalar dependencias (cacheables si package.json no cambia)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar código fuente y generar sitio estático
COPY . .
RUN pnpm run generate

# === Stage 2: Servir con Nginx ===
FROM nginx:stable-alpine

# Configuración personalizada de Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el sitio estático generado
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
