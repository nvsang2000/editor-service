FROM oven/bun

WORKDIR /app

COPY package.json .

RUN bun install --production

COPY . .

CMD ["bun", "src/server.ts"]

EXPOSE 35000