# Builder
FROM node:22-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app

COPY package.json tsconfig.json ./
RUN pnpm install
COPY src ./src
RUN pnpm run build

# Runner 
FROM node:22-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm
COPY package.json ./
RUN pnpm install --prod
COPY --from=builder /app/dist ./dist
EXPOSE 3001
CMD ["node", "dist/index.js"]