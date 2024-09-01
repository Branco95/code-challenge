# ExpressJS TypeScript CRUD API

This project is a simple API built with ExpressJS and TypeScript, connected to a Postgres database via Prisma ORM.

## Technologies Used

- Node.js
- PostgreSQL
- Express.js
- TypeScript
- Prisma

## Configuration

1. Clone this repository:
   ```bash
   git clone https://github.com/Branco95/Problem-5-A-Crude-Server.git
   cd Problem-5-A-Crude-Server

2. Install dependencies:
   ```bash
   npm install

3. Configure the database connection in the `.env` file:
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

4. Run the migrations (create the database schema and tables in the database):
   ```bash
   npx prisma migrate dev
   

5. Start the server:
   ```bash
   npm run dev

## Model

```sql
model Resource {
  id        String   @id @default(uuid())
  name      String
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Routes

- `GET /api/resources`: List all resources
- `POST /api/resources`: Create a new resource
- `GET /api/resources/:id`: Get a resource by ID
- `PUT /api/resources/:id`: Update a resource by ID
- `DELETE /api/resources/:id`: Delete a resource by ID


## Folders and Files

- `src`: Contains the source code
  - `controllers`: Contains the route handlers
  - `prisma`: Contains the Prisma client instance
  - `routes`: Contains the route definitions
  - `index.ts`: Entry point of the application
