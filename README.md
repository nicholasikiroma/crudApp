# HNG Task Two

## Description

A simple REST API capable of CRUD operations on a "person" resource that interfaces with a MongoDD database.

## Available Endpoints

| Route | Description |
| --- | ----------- |
| `GET` /api/:userId | Fetch a user from the database |
| `POST` /api | Create a new user |
| `PUT` /api/:userId | Update a user |
| `DELETE` /api/:userId | Delete a user |

## API Documentation

- [Documentation](./DOCUMENTATION.md)

## Usage

clone project repository:

```bash
git clone https://github.com/nicholasikiroma/crudApp.git
cd crudApp
```

Install dependencies:

```bash
npm install
```

Create a `.env` with the values:

```bash
DATABASE_URL=<replace-with-mongodb-connection-string>
```

Start up server:

```bash
npm run start
```

The API will be available at <http://localhost:PORT/api>
