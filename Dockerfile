# Build Stage
FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

# Run Stage
FROM nginx:latest
# Copy the files created in the builder stage
COPY --from=builder /usr/app/build /usr/share/nginx/html

