FROM node:14-alpine3.14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install
RUN echo "VUE_APP_API_ENDPOINT"="http://localhost:4001/api" > .env.production && npm run build

FROM nginx:1.21.4-alpine

WORKDIR /user/share/nginx

RUN rm -rf ./html/*

COPY --from=builder /app/dist ./html

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]