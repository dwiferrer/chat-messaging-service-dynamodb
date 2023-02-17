# Chat Messaging Service

Developed as a technical task requirement for Dev Centre House.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

| Technology | Version     |
| :--------- | :---------- |
| NodeJS     | >= v18.14.0 |

### Setup

Install NodeJS

```
https://nodejs.org/en/download/
```

Clone repository

```
https://github.com/dwiferrer/chat-messaging-service.git
```

Install dependencies

```
npm install
```

Create .env file

- Fill up env variables

```
PORT =
MONGO_DB_URI =
```

Run application

```
npm start
```

Run application in dev mode (nodemon)

```
npm run start-dev
```

## API Documentation

### Send Message

- Creates message

```
POST /api/messages
```

```
Sample request body:

{
    "message": "Hello world!"
}

// message required
```

### Read all message

- Fetch all messages

```
GET /api/messages
```

```
Sample response:

[
    {
        "_id": "63ee88acaf3242922ce7efbe",
        "message": "Fifth Message",
        "id": "79dc024d-b123-4f56-8b51-a98f30c847f0",
        "createdAt": "2023-02-16T19:49:00.058Z",
        "updatedAt": "2023-02-16T19:49:00.058Z",
        "__v": 0
    },
    {
        "_id": "63ef176b1ac5c89f695a5e2f",
        "message": "Hello World!",
        "id": "8e76251e-f0d6-4691-bc33-aaa39ac90e93",
        "createdAt": "2023-02-17T05:58:03.406Z",
        "updatedAt": "2023-02-17T05:58:03.406Z",
        "__v": 0
    }
]
```

### Read message by id

- Confirms receiving the message

```
GET /api/messages/:id

// where id = uuid of message to be read
// id required
```

```
Sample response:

{
    "_id": "63ef176b1ac5c89f695a5e2f",
    "message": "Hello World!",
    "id": "8e76251e-f0d6-4691-bc33-aaa39ac90e93",
    "createdAt": "2023-02-17T05:58:03.406Z",
    "updatedAt": "2023-02-17T05:58:03.406Z",
    "__v": 0
}
```

### Delete message by id

- Deletes message by id

```
DELETE /api/messages/:id

// where id = uuid of message to be deleted.
// id required
```

```
Sample response:

"Message successfully deleted."
```

## Built With

- [ExpressJS](https://expressjs.com/) - A light-weight web application framework

## Branches and Development

Underconstruction...

## Versioning

Underconstruction...

## Author/s

Dwight Ferrer - https://github.com/dwiferrer - dwi.ferrer@gmail.com
