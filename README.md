## Requirement

- Node.js LTS (v16.17.0)
- Docker-compose (v2.6.1)
- ts-node (v10.9.1)

## Usage

- docker compose up -d
- Set .env or DATABASE_URL environment variable accordingly
- yarn or npm install
- ts-node index.ts

## Notes

- docker compose should create pg database locally on default pg port (5432) with credential in docker-compose.yml
- You can set your desired version of Prisma either 4.3.1 or 4.4.0 (default) for repro
