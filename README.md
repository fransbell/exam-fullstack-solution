## <-- For english speaker please see [README_en.md](https://github.com/fransbell/exam-fullstack-solution/blob/main/README_en.md) -->

this exam & problem derived form [deeploydev/exam-fullstack](https://github.com/deeploydev/exam-fullstack)

## Backend Path

### Problem Solving

การทบสอบการใช้งาน

```
// clone repository นี้
git clone git@github.com:fransbell/exam-fullstack-solution.git

// install required packages
npm install

// รันเทสด้วยคำสั่ง npm start <program>
npm start problem-101

```

รายชื่อ program ทั้งหมด

- problem-101 (problem-solving 1.1)
- problem-102 (problem-solving 1.2)
- problem-103 (problem-solving 1.3)

### Web Service

การทบสอบการใช้งาน ( NODE )

```
cd ./backend/2

npm install

npm run dev

// test at localhost:1111
```

การทบสอบการใช้งาน ( DOCKER )

```
cd ./backend/2

// build image
docker-compose build

// run docker-compose
docker-compose up -d

// test at localhost:1111
```

ทดสอบ API ผ่าน REST CLIENT หรือ CURL

[TESTFILE](https://github.com/fransbell/exam-fullstack-solution/tree/main/backend/2/test)

## Frontend path

การทบสอบการใช้งาน ( NODE ) required backend

```
cd ./frontend/

npm install

npm run dev

// test at localhost:3000
```

การทบสอบการใช้งาน ( DOCKER ) required backend

```
cd ./frontend

// build image
docker-compose build

// run docker-compose
docker-compose up -d

// test at localhost:3000
```

## Fullstack path

docker-compose ใน root ประกอบไปด้วย

- Database
- Backend
- Frontend

วิธีการรัน app

```
// build image
docker-compose build

// run container
docker-compose up -d

```
