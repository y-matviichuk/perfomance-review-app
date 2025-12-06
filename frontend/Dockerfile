# Development/Simple version with Vite
FROM node:22-alpine
RUN npm install -g pnpm
WORKDIR /app

COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

EXPOSE 5173
CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "5173"]
