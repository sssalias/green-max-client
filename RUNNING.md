# Запуск Green Max Client

## Требования

- Node.js 20 или новее
- Yarn или npm

## Локальный запуск

1. Установите зависимости:

   ```bash
   yarn install
   ```

   Или через npm:

   ```bash
   npm install
   ```

2. Создайте `.env` на основе `.env.example`:

   ```bash
   cp .env.example .env
   ```

   В Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

3. При необходимости измените `VITE_API_URL` в `.env`.

4. Запустите приложение в режиме разработки:

   ```bash
   yarn dev
   ```

   Или:

   ```bash
   npm run dev
   ```

   После запуска откройте адрес из вывода Vite, обычно `http://localhost:5173`.

## Проверка проекта

Production-сборка:

```bash
yarn build
```

Предпросмотр production-сборки:

```bash
yarn preview
```

Проверка ESLint:

```bash
yarn lint
```

## Запуск через Docker

Production-образ:

```bash
docker build -t green-max-client .
docker run --rm -p 80:80 green-max-client
```

После запуска приложение доступно по адресу `http://localhost`.

Локальная разработка через Docker:

```bash
docker build -f Dockerfile.local -t green-max-client-local .
docker run --rm -p 3000:3000 green-max-client-local
```

Приложение доступно по адресу `http://localhost:3000`.

## Авторизация

После открытия приложения введите `idInstance` и `apiTokenInstance` Green API. Эти данные сохраняются в `localStorage` браузера и используются для запросов к API.
