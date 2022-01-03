# Builder
FROM node:16.13.1-alpine As builder

WORKDIR /app

COPY ./src .

RUN npm install

RUN npm build


# Final
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
