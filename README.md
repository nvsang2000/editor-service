# editor-service

Editor Service is a lightweight backend service built with ElysiaJS, running on the Bun runtime. It provides APIs for PDF generation, HTML processing, and editor-related server logic. The project supports Swagger API documentation and includes tools for database migrations via Drizzle Kit.

## Purpose

- Demonstrate how to organize source code inside a service.
- Provide an example of implementing a RESTful API.

## Technologies Used

- **Bun**: JavaScript/TypeScript runtime.
- **TypeScript**: Programming language.
- **Elysia**: Web framework.
- **Drizzle ORM**: ORM for PostgreSQL database.

## Directory Structure

```
example-service/
├── migrations/              # Directory containing database migrations
├── src/                     # Main source code
│   ├── @types/              # TypeScript type definitions
│   ├── controllers/         # Controllers handling business logic
│   ├── db/                  # Database table definitions
│   ├── middleware/          # Middleware (if any)
│   ├── routes/              # Route definitions
│   ├── app.ts               # Initialize the Elysia application
│   ├── db.ts                # Database connection
│   ├── server.ts            # Service entry point
├── .env                     # Environment variables
├── bunfig.toml              # Bun configuration
├── drizzle.config.ts        # Drizzle ORM configuration
```

## Environment Configuration

Environment variables are defined in the `.env` file:

```sh
# Port on which the service will run
PORT=3000

# Service endpoint address, used for internal API calls
SERVICE_GATEWAY=http://service.localhost:3000

# Database connection URL
DATABASE_URL=postgres://postgres:postgres@localhost:5432/example

# RabbitMQ server connection URL
AMQP_URL=amqp://localhost

# Log level: trace, debug, info, warn, error, fatal
LOG_LEVEL=info

# Enable/disable logger
LOG_ENABLED=true

# Application name
APP_NAME=my-service
```

## How to Set Up the Database

The project uses **Drizzle ORM** to manage the database. Main commands:

- **Install libraries for Linux environment**:

  ```bash
  sudo apt-get install graphicsmagick ghostscript
  ```

## Access

```bash
# API Endpoint
http://localhost:3000

# Swagger UI
http://localhost:3000/swagger
```