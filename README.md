📚 Student Management System (Flutter + Node.js + MySQL)

A full-stack CRUD application built using Flutter (Frontend), Node.js + Express (Backend), and MySQL (Database).

This project demonstrates complete Create, Read, Update, and Delete (CRUD) operations with proper API integration.

🚀 Tech Stack
🔹 Frontend

Flutter

HTTP package

Dart

🔹 Backend

Node.js

Express.js

MySQL

CORS

Nodemon

🔹 Database

MySQL

📌 Features

✅ Create Student

✅ Read All Students

✅ Update Student by ID

✅ Delete Student by ID

✅ RESTful API

✅ JSON-based communication

✅ Full frontend-backend integration

🏗️ Project Architecture

Flutter App
⬇
REST API (Express Server)
⬇
MySQL Database

📂 Backend Setup
1️⃣ Install Dependencies
npm install

2️⃣ Required Packages
npm install express mysql cors nodemon

3️⃣ Database Configuration

Create database:

CREATE DATABASE crud;


Create table:

USE crud;

CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

4️⃣ Start Backend Server
nodemon server.js


Server runs on:

http://localhost:8081

📡 API Endpoints
🔹 Get All Students
GET /students

🔹 Create Student
POST /students


Body:

{
  "name": "Ayush",
  "email": "ayush@gmail.com",
  "password": "1234"
}

🔹 Update Student
PUT /students/:id

🔹 Delete Student
DELETE /students/:id

📱 Flutter Setup
1️⃣ Install dependencies
flutter pub get

2️⃣ Update API Base URL

If running on same system:

http://localhost:8081


If running on physical device:

http://YOUR_LOCAL_IP:8081


Example:

http://192.168.18.39:8081

3️⃣ Run Flutter App
flutter run

🔐 Important Notes

CORS must be enabled in backend

Backend must connect to correct database (crud)

Column names must match in:

Database

Backend queries

Flutter model

📌 Learning Outcomes

This project demonstrates:

REST API creation

MySQL database integration

Backend routing & controllers

Flutter API integration

Full-stack debugging

Cross-origin configuration

Real-world CRUD architecture

🔮 Future Improvements

Password hashing (bcrypt)

JWT authentication

Input validation

Search & pagination

Deployment (Render / Railway)

Role-based access control

UI enhancements

👨‍💻 Author

Ayush Raj
B.Tech – NIT Rourkela
