# Blog API - Clean Architecture + CQRS

This project is a **NestJS REST API** for a blog system (Users, Posts, Comments) built with:

✅ Clean Architecture  
✅ Domain-Driven Design (DDD)  
✅ Repository Pattern  
✅ CQRS (Command Query Responsibility Segregation)  

---

## 📌 Features

- **User Registration**
- **Post CRUD (Create, Read, Update, Delete)**
- **Add Comment to a Post**
- **CQRS applied across core features**
- **JWT authentication**
- **Swagger API documentation**

---

## 🚀 Tech Stack

- **NestJS**
- **PostgreSQL** 
- **prisma** 
- **CQRS module**
- **JWT for auth**
- **postman for API docs**

---

## 🗂 Project Structure

src/
├── modules/
│ ├── users/
│ ├── posts/
│ └── comments/
├── shared/
├── infrastructure/
├── application/
├── domain/
└── main.ts


- `domain/`: Entities, aggregates, domain services
- `application/`: Use cases, DTOs, CQRS handlers
- `infrastructure/`: DB, external services
- `modules/`: Feature modules (Users, Posts, Comments)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/blog-api-clean-architecture-cqrs.git
cd blog-api-clean-architecture-cqrs

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your DB credentials

# Run migrations / sync DB (if applicable)
# npm run typeorm migration:run
# or
# npm run db:sync

# Start the app
npm run start:dev

💡 CQRS & Clean Architecture
All commands (write operations) and queries (read operations) are separated using NestJS CQRS module.

Repositories abstract DB access.

Controllers delegate to use-cases/handlers — no business logic in controllers.

🐳 Docker 
docker-compose up --build


✍️ Author
Yakob Beshahwered

📄 License
This project is licensed under the MIT License.


---

⚡ **Next Steps:**  
If you tell me:
- DB used (PostgreSQL or MySQL?)  
- ORM used (TypeORM / Sequelize / Prisma / other?)  
- Whether you did Docker or testing  

👉 I can fine-tune this README and make it ready to drop into your repo.

Do you want me to generate that final README as a file for you? Let me know! 🚀

