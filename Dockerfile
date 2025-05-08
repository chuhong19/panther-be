# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build the app
RUN yarn build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy only needed files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose port (same as in .env or main.ts)
EXPOSE 5070

# Start the app
CMD ["node", "dist/main"]
