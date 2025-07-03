
# Blog API — Clean Architecture + CQRS

A **NestJS REST API** for a blog system (Users, Posts, Comments) built using:

✅ Clean Architecture  
✅ Domain-Driven Design (DDD)  
✅ Repository Pattern  
✅ CQRS (Command Query Responsibility Segregation)  
✅ Prisma ORM + PostgreSQL  

---

## 🚀 Features

- **User Registration**
- **JWT-based Authentication**
- **Full CRUD for Posts**
- **Add Comment to Posts**
- **CQRS applied for all core features**
- **Postman API documentation**

---

## ⚙️ Tech Stack

- **NestJS**
- **PostgreSQL**
- **Prisma ORM**
- **CQRS module**
- **JWT for Authentication**
- **Postman for API docs**

---

## 🗂 Project Structure

```
src/
 ├── modules/
 │    ├── users/
 │    ├── posts/
 │    └── comments/
 ├── domain/
 ├── application/
 ├── infrastructure/
 ├── shared/
 └── main.ts
```

- `domain/` — Entities, aggregates, domain services
- `application/` — Use cases, DTOs, CQRS handlers
- `infrastructure/` — Database, external services
- `modules/` — Feature modules
- `shared/` — Common utilities

---

## 💻 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Yakob72119/blog-api-clean-architecture-cqrs.git
cd blog-api-clean-architecture-cqrs
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

```bash
cp .env.example .env
```
Edit `.env` to include your PostgreSQL connection string and other secrets.

---

### 4️⃣ Setup the database

Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

(Optional: Generate Prisma client)
```bash
npx prisma generate
```

2️⃣ Run Prisma Studio
Any time you want to browse/edit DB:

```bash
docker exec -it blog-backend npx prisma studio
```


### 5️⃣ Start the application

```bash
npm run start:dev
```

---

## 🧪 API Documentation

Postman collection available at:  
👉 [View API Documentation](https://documenter.getpostman.com/view/46351767/2sB34bKi1e)

---

## 🐳 Docker

```bash
docker compose up --build -d
```


---

## 🧪 Testing

✅ Unit and integration tests planned (coming soon).

---

## 💡 Notes

- **CQRS:** All commands (writes) and queries (reads) are handled via the NestJS CQRS module.
- **Prisma:** Prisma is used for database access with type safety.
- **Security:** JWT-based authentication applied for protected routes.

---

## ✍️ Author

Yakob Beshahwered

---

## 📄 License

This project is licensed under the MIT License.
