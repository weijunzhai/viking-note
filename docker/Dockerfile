# production build and deploy

FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# from anothre container --from
COPY --from=builder /app/build /usr/share/nginx/html