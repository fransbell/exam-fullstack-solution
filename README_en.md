## <-- For thai speaker please see [README.md](https://github.com/fransbell/exam-fullstack-solution/blob/main/README.md) -->

this exam & problem derived form [deeploydev/exam-fullstack](https://github.com/deeploydev/exam-fullstack)

## Backend Path

### Problem Solving

testing problem solving exam

```
// clone this repository
git clone git@github.com:fransbell/exam-fullstack-solution.git

// install required packages
npm install

// run test with => npm start <program>
npm start problem-101

```

list of problems

- problem101 (problem-solving 1.1)
- problem102 (problem-solving 1.2)
- problem103 (problem-solving 1.3)

### Web Service

run with NODE

```
cd ./backend/2

npm install

npm run dev

// test at localhost:1111
```

run with DOCKER

```
cd ./backend/2

// build image
docker-compose build

// run docker-compose
docker-compose up -d

// test at localhost:1111
```

Test API with REST CLIENT, or CURL

[TESTFILE](https://github.com/fransbell/exam-fullstack-solution/tree/main/backend/2/test)

## Frontend path

run with NODE (required backend service running)

```
cd ./frontend/

npm install

npm run dev

// test at localhost:3000
```

Run with DOCKER (required backend service running)

```
cd ./frontend

// build image
docker-compose build

// run docker-compose
docker-compose up -d

// test at localhost:3000
```

## Fullstack path

docker-compose file in root contain 3 services:

- Database
- Backend
- Frontend

Run Docker Container

```
// build image
docker-compose build

// run container
docker-compose up -d

```
