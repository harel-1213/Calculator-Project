# Use an official Python runtime as a base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Flask application file into the container
COPY Flask.py .

# Copy the templates directory into the container
COPY templates/ templates/

# Install Flask
RUN pip install Flask

# Expose port 5000 to allow external connections
EXPOSE 5000

# Define the command to run your Flask application
CMD ["python", "Flask.py"]


