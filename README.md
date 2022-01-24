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

- problem101 (problem-solving 1.1)
- problem102 (problem-solving 1.2)
- problem103 (problem-solving 1.3)

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

docker-compose มีทั้งหมด 2 เวอร์ชั่น | 2 stack ได้แก่

- nextjs , mongoose , express
- nextjs , postgress , typeorm , express

โดยทั้ง 2 ตัวจะใช้ frontend ตัวเดียวกัน สังเกตุได้จาก

./docker-compose.yml -- mongodb-stack
./pg-typeorm-express-stack/docker-compose.yml -- postgers-stack

service ใน docker-compose ทั้ง 2 ตัวจะประกอบไปด้วย ถึงชื่อใน docker-compose จะต่างแต่ก็มีส่วนประกอบเหมือนๆกันคือ

- Database
- Backend
- Frontend

วิธีการรัน app

สำหรับ mongodb-stack

```
// cd ใน root folder
// build image
docker-compose build

// run container
docker-compose up -d

```

สำหรับ postgres-stack

```
// cd ใน root folder

// cd ไป pg-typeorm-express-stack
cd ./pg-typeorm-express-stack

// build image
docker-compose build

// run container
docker-compose up -d

```
