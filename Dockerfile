FROM oven/bun:0.7.0

# Create app directory
WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
COPY .env.docker ./.env

RUN bun install

COPY . .

EXPOSE 8080
CMD [ "bun", "index.js" ]