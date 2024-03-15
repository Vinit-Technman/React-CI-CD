FROM node:18-alpine AS base

# WORKDIR /django-demo/
WORKDIR /app


# COPY public/ /django-demo/public
# COPY src/ /django-demo/src
#copies package.json and package-lock.json to Docker environment
# COPY package.json /django-demo/
COPY package.json ./


RUN npm install

# Copies everything over to Docker environment
COPY . .

# build
CMD ["npm", "start"]


FROM nginx:1.22.1-alpine as prod-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# RUN npm run build


