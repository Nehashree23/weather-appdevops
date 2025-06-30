# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your server code
COPY . .

# Expose the port (Render detects it)
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
