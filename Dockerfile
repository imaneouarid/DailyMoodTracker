# Use an official Node.js image as a base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /DAILYMOODTRACKER

# Copy package.json and package-lock.json to the working directory
COPY package.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm build

# Expose the port on which the React app will run
EXPOSE 3000

# Command to run the React app when the container starts
CMD ["npm", "start"]
