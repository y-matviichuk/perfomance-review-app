
FROM node:22-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app

COPY tsconfig.base.json ./

COPY backend/package.json ./package.json
COPY backend/tsconfig.json ./tsconfig.json

RUN pnpm install

COPY backend/src ./src

RUN pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm

COPY backend/package.json ./

RUN pnpm install --prod

COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["node", "dist/index.js"]