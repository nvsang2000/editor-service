FROM oven/bun

# Set working directory inside container
WORKDIR /app

# Copy package.json and lockfile first for caching dependencies
COPY package.json bun.lockb* ./

# Install only production dependencies
RUN bun install --production

# Copy the rest of the source code
COPY . .

# Expose the API port
EXPOSE 35000

# Run the server with Bun
CMD ["bun", "run", "src/server.ts"]
