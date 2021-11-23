# build vue application -----------------------------
FROM node:14-alpine3.14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules
RUN npm install

# create vue prod environment variables and build application
RUN echo "VUE_APP_API_ENDPOINT"="http://localhost:4001/api" > .env.production && npm run build

# deploy app in lightweight nginx server -------------------------
FROM nginx:1.21.4-alpine

WORKDIR /user/share/nginx

# delete nginx default index
RUN rm -rf ./html/*

# copy built app in default server folder to deploy
COPY --from=builder /app/dist ./html

# coppy nginx configuration file to serve vue app
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# turn off nginx daemon to best practices in one process per container
CMD ["nginx", "-g", "daemon off;"]