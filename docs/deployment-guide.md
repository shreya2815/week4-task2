# Deployment Guide

## 1. Project Overview
This project is a full-stack web application using HTML, CSS, Node.js, Express, and MySQL.

## 2. Technologies Used
- HTML
- CSS
- Node.js
- Express.js
- MySQL

## 3. Environment Variables
Configure these variables on the hosting platform:

- PORT
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME

## 4. Database Setup
1. Create a MySQL database.
2. Create the required tables.
3. Configure the database connection settings.

## 5. Backend Deployment
1. Upload the project to GitHub.
2. Connect the repository to a hosting platform that supports Node.js.
3. Configure the environment variables.
4. Set the start command according to package.json.
5. Deploy the backend.

## 6. Testing
1. Open the deployed application URL.
2. Test the available API endpoints.
3. Check that the application responds correctly.

## 7. Security
- Do not upload real passwords or API keys to GitHub.
- Store sensitive values in the hosting platform's environment settings.
- Keep the .env file out of version control.