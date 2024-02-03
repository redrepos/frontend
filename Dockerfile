# Stage 1: Build the app
FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm update
#COPY code/ .
RUN npm run build

# Stage 2: Production image
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
