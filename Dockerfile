FROM oven/bun

WORKDIR /app

COPY package.json .

RUN bun install --production

COPY . .

EXPOSE 35000

CMD ["bun", "src/server.ts"]
