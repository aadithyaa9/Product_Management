# Product_Management
Getting Into PERN stack 


Product Management App
A simple full-stack web application for managing a list of products. This application provides basic CRUD (Create, Read, Update, Delete) functionality, allowing users to add, view, edit, and delete products from a database.

The frontend is built with React and Vite, using Zustand for state management and Tailwind CSS with DaisyUI for styling. The backend is a Node.js and Express server that connects to a Neon serverless PostgreSQL database.

🚀 Tech Stack
Frontend:

React

Vite

Zustand (State Management)

React Router

Tailwind CSS

DaisyUI

Axios

Backend:

Node.js

Express.js

Neon (Serverless PostgreSQL)

dotenv for environment variables

Arcjet for rate limiting and bot protection

📋 Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (v18.x or later recommended)

npm (comes with Node.js)

A Neon database account (or any other PostgreSQL database)

⚙️ Setup & Installation
Follow these steps to get your development environment set up.

1. Clone the Repository
Clone this project to your local machine.

git clone <your-repository-url>
cd Product_Management

2. Set Up Environment Variables
The backend requires a .env file with your database credentials.

Create a new file named .env in the root directory of the project (Product_Management/.env).

Add the following variables, replacing the placeholder values with your actual Neon database connection string details:

# .env

# Neon Database Credentials
PUSER=your_database_user
PHOST=your_database_host
PDATABASE=your_database_name
PPASSWORD=your_database_password

# Arcjet Key (Optional)
ARCJET_KEY=your_arcjet_sdk_key

3. Install Dependencies
You need to install dependencies for both the backend server and the frontend client.

Install Backend Dependencies (from the root directory):

npm install

Install Frontend Dependencies (from the root directory):

npm install --prefix frontend

▶️ Running the Application
This project requires you to run the backend server and the frontend development server simultaneously in two separate terminals.

Terminal 1: Start the Backend Server
Make sure you are in the root directory (Product_Management).

Run the following command to start the backend server with nodemon, which will automatically restart on file changes.

npm run dev

You should see the following output if successful:

Server is running on port 3000
Database connected and table created successfully

The backend API is now running at http://localhost:3000.

Terminal 2: Start the Frontend Application
Open a new terminal window.

Navigate to the frontend directory.

cd frontend

Run the following command to start the Vite development server.

npm run dev

The frontend application will now be running and accessible at http://localhost:5173 (or another port if 5173 is in use). Open this URL in your web browser to use the application.
