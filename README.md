## Бронирования билетов

### Установка

```bash
npm ci
```

### Запуск

#### 1) Поднять PostgreSQL через docker-compose

Переменные окружения:
Создать .env с

- `POSTGRES_HOST`
- `POSTGRES_PORT`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `PORT`

```bash
docker-compose up -d
```

#### 2) Запустить миграции

```bash
npm run migration:run
```

#### 3) Запустить приложение

Запуск:

```bash
npm run start:dev
```

### Как создать места

`POST /seats` — вспомогательная ручка для подготовки данных перед бронированием.

#### Postman

- **Method**: `POST`
- **URL**: `http://localhost:{{port}}/seats`
- **Headers**: `Content-Type: application/json`
- **Body (raw / JSON)**:

```json
{
  "seatId": "A-1"
}
```

### Как забронировать место

`POST /reserve` принимает `userId` и `seatId`.

#### Postman

- **Method**: `POST`
- **URL**: `http://localhost:{{port}}/reserve`
- **Headers**: `Content-Type: application/json`
- **Body (raw / JSON)**:

```json
{
  "userId": "u1",
  "seatId": "A-1"
}
```
