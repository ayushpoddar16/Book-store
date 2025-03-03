📚 BookStore Management System
A full-stack MERN (MongoDB, Express, React, Node.js) application for managing a collection of books.
Features

📋 View all books in the collection
➕ Add new books to the store
🖊️ Edit existing book information
🗑️ Delete books from the collection


About This Project
This BookStore Management System allows users to manage a collection of books through a clean and intuitive interface. The application implements CRUD (Create, Read, Update, Delete) operations, enabling users to:

Browse through all available books in a responsive grid/table layout
View detailed information about each book
Add new books with details like title, author, publish year, and description
Edit existing book information
Delete books from the collection

The project uses MongoDB Atlas as a cloud database, Express.js for the backend API, React for the frontend interface, and Node.js as the runtime environment.
Tech Stack
Backend

Node.js - JavaScript runtime
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling

Frontend

React - JavaScript library for building user interfaces
Vite - Next generation frontend tooling
Tailwind CSS - Utility-first CSS framework
React Router - Declarative routing for React



Configuration
The application requires a config.js file in the backend directory with your MongoDB connection details and server port. This file contains sensitive information and is excluded from version control via .gitignore.

Use the provided config.example.js as a template
Create your own config.js file with your actual MongoDB credentials:

// Server port
export const PORT = 5555;

// MongoDB connection string
export const mongoDBURL = `mongodb+srv://username:password@your-cluster.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore`;