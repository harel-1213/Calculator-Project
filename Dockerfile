# FROM node:16-alpine

# WORKDIR /app

# COPY . .

# RUN npm install

# EXPOSE 8080

# CMD ["node", "app.js"]
FROM node:16-alpine

WORKDIR /app

COPY . .

# Install http-server globally
RUN npm install -g http-server

# Install app dependencies
RUN npm install

EXPOSE 8080

# Command to run when the container starts
CMD ["npx","http-server", "-p", "8080"]
