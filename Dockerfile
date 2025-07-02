# 1. Use Node.js base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json first
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Generate Prisma Client
RUN npx prisma generate

# 7. Build the NestJS app
RUN npm run build

# 8. Copy the wait script and make it executable
COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

# 9. Expose the app port
EXPOSE 3000

# ✅ 10. Start app only after DB is ready
CMD ["/wait-for.sh", "db", "5432", "node", "dist/main"]
