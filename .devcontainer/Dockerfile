# Use Node 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install Gatsby CLI globally and then install project dependencies
RUN npm install -g gatsby-cli && npm install

# Copy the rest of the code
COPY . .

# Expose port 8000 for the app to listen on
EXPOSE 8000

# Keep the container running
CMD ["tail", "-f", "/dev/null"]