# Simple RabbitMQ Service

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
git clone https://github.com/dwiferrer/chat-messaging-service-dynamodb
```

Install dependencies

```
npm install
```

Create .env file

- Fill up env variables

```
PORT =
AWS_DEFAULT_REGION =
AWS_ACCESS_KEY_ID =
AWS_SECRET_ACCESS_KEY =

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
    "username": "dwight",
    "message": "Hello world"
}

// username and message required
```

```
Sample response:

"Message successfully sent!"
```

### Create bulk messages

- Bulk creates messages

```
POST /api/messages/bulk
```

```
Sample request:

[
    {
        "username": "dwight",
        "message": "Hello world 2"
    },
    {
        "username": "dwight",
        "message": "Hello world 3"
    },
    {
        "username": "dwight",
        "message": "Hello world 4"
    }
]
```

```
Sample response:

"Messages successfully sent!"
```

### Read message by username

- Gets messages by username

```
GET /api/messages/:username

// username required
```

```
Sample response:

[
    {
        "username": "dwight",
        "message": "Hello world 1"
    },
    {
        "username": "dwight",
        "message": "Hello world 2"
    },
    {
        "username": "dwight",
        "message": "Hello world 3"
    }
]
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

### Delete bulk messages by id

- Deletes bulk messages by id

```
DELETE /api/messages/bulk
```

```
Sample request:

[
    {
        "id": "c641a5a7-f560-49fe-9c88-06735e260e20"
    },
    {
        "id": "4baa064d-8fab-40b7-862d-730c2c3951b4"
    },
    {
        "id": "c910e669-93d4-4ba5-ae92-fed64e2d590c"
    }
]
```

```
Sample response:

"Messages successfully deleted."
```

## Built With

- [ExpressJS](https://expressjs.com/) - A light-weight web application framework

## Branches and Development

Underconstruction...

## Versioning

Underconstruction...

## Author/s

Dwight Ferrer - https://github.com/dwiferrer - dwi.ferrer@gmail.com
