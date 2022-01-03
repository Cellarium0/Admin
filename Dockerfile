# Builder
FROM node:16.13.1-alpine As builder

WORKDIR /app

COPY ./src .

RUN npm install

RUN npm run build


# Final
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
